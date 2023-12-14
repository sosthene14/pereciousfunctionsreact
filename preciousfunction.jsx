//handleclickoutside

function useOutsideAlerter(ref,clickref) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (canMaskNotifications) {
                    if (ref.current && !ref.current.contains(event.target) || clickref.current.contains(event.target)) {
                        setCanMaskNotifications(false)
                    }
                }
                else if (!canMaskNotifications) {
                    if (clickref.current.contains(event.target)) {
                        setCanMaskNotifications(true)
                    }
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref, canMaskNotifications]);
    }

//update json file localy
  const hanldeDatas = (name, e) => {
    setData({ ...data, [name]: e.target.value });
  };
