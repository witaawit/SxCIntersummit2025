const { google } = require('googleapis');
const prisma = require('../config/db'); // Asumsi Prisma ORM
const { Readable } = require('stream');
const { buffer } = require('stream/consumers');
const auth = new google.auth.GoogleAuth({
  keyFile: process.env.GOOGLE_APPLICATION_CREDENTIALS,
  scopes: ['https://www.googleapis.com/auth/drive'],
});
const driveService = google.drive({ version: 'v3', auth });
const ORGANIZATION_FOLDER_ID = process.env.GOOGLE_DRIVE_ORG_FOLDER_ID;

/**
 * Cari folder bernama folderName di dalam parentFolderId, kembalikan ID folder jika ada, atau null jika tidak ada
 */
async function findFolderId(folderName, parentFolderId) {
  const res = await driveService.files.list({
    q: `'${parentFolderId}' in parents and name = '${folderName}' and mimeType = 'application/vnd.google-apps.folder' and trashed = false`,
    fields: 'files(id, name)',
    spaces: 'drive',
  });

  if (res.data.files.length > 0) {
    return res.data.files[0].id;
  } else {
    return null;
  }
}

/**
 * Buat folder baru dengan nama folderName di dalam parentFolderId, kembalikan ID folder baru tersebut
 */
async function createFolder(folderName, parentFolderId) {
  const fileMetadata = {
    name: folderName,
    mimeType: 'application/vnd.google-apps.folder',
    parents: [parentFolderId]
  };
  const folder = await driveService.files.create({
    requestBody : fileMetadata,
    fields: 'id',
    supportsAllDrives: true,
  });
  return folder.data.id;
}

/**
 * Pastikan folder event ada, jika tidak ada buat baru lalu return ID folder
 */
async function ensureEventFolder(eventName) {
  let folderId = await findFolderId(eventName, ORGANIZATION_FOLDER_ID);
  if (!folderId) {
    folderId = await createFolder(eventName, ORGANIZATION_FOLDER_ID);
  }
  return folderId;
}


function bufferToStream(buffer) {
  const stream = new Readable();
  stream.push(buffer);
  stream.push(null);
  return stream;
}

/**
 * Upload file ke Google Drive di folder parentFolderId
 */
async function uploadFileToDrive(fileBuffer, fileName, parentFolderId) {
  const fileMetadata = {
    name: fileName,
    parents: [parentFolderId],
  };
  const media = {
    mimeType: 'application/octet-stream',
    body: bufferToStream(fileBuffer),
  };
  const response = await driveService.files.create({
    requestBody: fileMetadata,
    media: media,
    fields: 'id, webViewLink',
    supportsAllDrives: true,
  });
  return response.data; // {id, webViewLink}
}

/**
 * Fungsi buat submission dengan enum event (string) yang jadi nama folder di Drive
 */
async function createSubmission({ data }) {
  // Pastikan folder event ada dan dapatkan folderId-nya
  const eventFolderId = await ensureEventFolder(data.event);

  // Upload file ke Google Drive di folder event
  const uploadedFile = await uploadFileToDrive(data.file.buffer, data.file.originalname, eventFolderId);

  // Simpan ke DB
  const submission = await prisma.submission.create({
    data: {
      seminarId: data.seminarId,
      teamId: data.teamId,
      userId: data.userId,
      stage: data.stage,
      type: data.type,
      event: data.event,
      submittedAt: new Date()
    },
  });
  const submissionFile = await prisma.submissionFile.create({
    data: {
      submissionId: submission.id, 
      fileName: data.file.originalname, 
      filePath: uploadedFile.webViewLink,
      googleDriveFileId: uploadedFile.id
    }
  });

  // Return submission lengkap (atau sesuai kebutuhan)
  return { submission, submissionFile };
}

async function getSubmissionsByEvent(event) {
  return prisma.submission.findMany({
    where: { event },
  });
}




module.exports = {
  createSubmission,
  getSubmissionsByEvent,
};