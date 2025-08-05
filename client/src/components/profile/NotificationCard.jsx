import React from "react";

function NotificationCard() {
  const notificationData = [
    {
      id: 1,
      title: "Business Model Canvas Event Reminder",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
      date: "2025-08-03",
      time: "10:30 AM",
    },
    {
      id: 2,
      title: "Business Model Canvas Event Reminder",
      description:
        "Loren ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
      date: "2025-08-04",
      time: "12:00 PM",
    },
    {
      id: 3,
      title: "Business Model Canvas Event Reminder",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
      date: "2025-08-05",
      time: "2:00 PM",
    },
    {
      id: 4,
      title: "Business Model Canvas Event Reminder",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
      date: "2025-08-06",
      time: "4:30 PM",
    },
    {
      id: 5,
      title: "Business Model Canvas Event Reminder",
      description:
        "Loren ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
      date: "2025-08-07",
      time: "6:00 PM",
    },
  ];

  return (
    <div className="mx-auto px-6 py-6"> {/* Reduced padding */}
      {/* Title Outside the Container */}
      <div className="text-left mb-4">
        <h2 className="text-white text-lg font-semibold">Notification</h2> {/* Reduced font size */}
      </div>

      {/* Container for Notifications */}
      <div className="container mx-auto px-4 py-6 bg-[#8257A9] rounded-3xl">
        {/* Scrollable area for notifications */}
        <div className="space-y-3 max-h-[400px] overflow-y-auto custom-scrollbar"> {/* Set a max height and allow scrolling */}
          {notificationData.map((notification) => (
            <div
              key={notification.id}
              className="bg-[#D9D9D9] rounded-2xl backdrop-blur-sm border-white/30 p-3 lg:p-4 mb-3 hover:bg-white/95 transition-colors"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between space-y-3 lg:space-y-0"> {/* Reduced space inside */}
                <div className="flex items-start space-x-3 flex-1">
                  {/* Icon */}
                  <div className="w-8 h-8 flex items-center justify-center flex-shrink-0"> {/* Reduced icon size */}
                    <img
                      src="/images/profile/pin.svg" // Path to your custom pin icon
                      alt="Notification Bell"
                      className="w-4 h-4" // Reduced icon size
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[#000000] text-sm lg:text-base mb-1 break-words"> {/* Reduced font size */}
                      {notification.title}
                    </h3>
                    <p className="text-[#4F4F4F] text-xs leading-relaxed break-words"> {/* Reduced font size */}
                      {notification.description}
                    </p>
                  </div>
                </div>

                {/* Right side content */}
                <div className="flex items-center justify-between lg:justify-start lg:items-start space-x-3 lg:ml-3"> {/* Reduced space */}
                  <div className="text-left lg:text-right">
                    <p className="text-gray-500 text-xs">{notification.date}</p> {/* Reduced font size */}
                    <p className="text-gray-500 text-xs">{notification.time}</p> {/* Reduced font size */}
                  </div>
                  <button className="text-gray-500 hover:text-gray-700 hover:bg-gray-100 p-1 flex-shrink-0"> {/* Reduced padding */}
                    <img
                      src="/images/profile/mail-icon.svg" // Path for the mail icon
                      alt="Mail Icon"
                      className="w-4 h-4" // Reduced icon size
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NotificationCard;