//handleclickoutside

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (e.target !== undefined) {
        if (
          notificatiion_container.current &&
          !notificatiion_container.current.contains(e.target) &&
          e.target.nodeName !== "HTML" &&
          !icon.current.contains(e.target)
        ) {
          setCanMaskNotifications(false);
          setSeeNewNotifications(false);
        }
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
//update json file localy
  const hanldeDatas = (name, e) => {
    setData({ ...data, [name]: e.target.value });
  };
