import axios from "axios";
import { useEffect, useState } from "react";
import { API } from "../../../api";
import Marquee from "react-fast-marquee";
import { RxCross2 } from "react-icons/rx";

const Notification = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [filteredNotification, setFilteredNotification] = useState([]);

  const token = localStorage.getItem("token");
  const [notification, setNotification] = useState("");
  useEffect(() => {
    axios.get(API.notification).then((res) => {
      setNotification(res?.data?.result);
    });
  }, [token]);

  useEffect(() => {
    const storedNotificationId =
      JSON.parse(localStorage.getItem("notificationId")) || [];
    if (
      (!storedNotificationId || storedNotificationId?.length === 0) &&
      notification?.length > 0
    ) {
      setShowNotification(true);

      setFilteredNotification(notification);
    }
    if (
      notification?.length > 0 &&
      storedNotificationId &&
      storedNotificationId?.length > 0 &&
      !showNotification
    ) {
      const filteredNotifications = notification.filter(
        (notif) => !storedNotificationId.some((nId) => nId.id == notif.id)
      );

      if (filteredNotifications?.length > 0) {
        setFilteredNotification(filteredNotifications);
        setShowNotification(true);
      }
    }
  }, [
    notification,
    showNotification,
    setFilteredNotification,
    setShowNotification,
  ]);

  const closeNotification = () => {
    const notificationIds =
      JSON.parse(localStorage.getItem("notificationId")) || [];

    notification?.forEach((item) => {
      if (!notificationIds.some((notif) => notif.id === item.id)) {
        notificationIds.push({ id: item.id });
      }
    });

    localStorage.setItem("notificationId", JSON.stringify(notificationIds));

    setShowNotification(false);
  };

  return (
    <>
      {/* className="marquee" */}
      {showNotification && filteredNotification?.length > 0 && (
        <div>
          <Marquee>
            {filteredNotification?.map((item) => (
              <p key={item?.id}>{item?.text}</p>
            ))}
          </Marquee>
          <RxCross2
            style={{
              position: "absolute",
              right: "15",
              bottom: "-3",
              zIndex: "999",
              marginLeft: "20px",
              fontWeight: "800",
            }}
            onClick={closeNotification}
            size={20}
            cursor="pointer"
          />
        </div>
      )}
    </>
  );
};

export default Notification;
