useEffect(() => {
  const handler = (e) => {
    if (e.target.matches("#search")) {
      if (e.key === "Escape") e.target.value = "";

      document.querySelectorAll(".Aside1").forEach((el) => {
        el.textContent.toLowerCase().includes(e.target.value.toLowerCase())
          ? el.classList.remove("filtro")
          : el.classList.add("filtro");
      });
    }
  };

  document.addEventListener("keyup", handler);

  return () => document.removeEventListener("keyup", handler);
}, []);
