// ✅ SidebarLogic.js - Enhanced for mobile responsiveness
export function initSidebar() {
  const sidebar = document.querySelector(".sidebar");
  const sidebarOpenBtn = document.querySelector("#sidebar-open");
  const sidebarCloseBtn = document.querySelector("#sidebar-close");
  const sidebarLockBtn = document.querySelector("#lock-icon");

  if (!sidebar) return;

  // ✅ Check if device is mobile
  const isMobile = () => window.innerWidth <= 768;

  // Function to toggle the lock state of the sidebar
  const toggleLock = () => {
    if (isMobile()) return; // Disable lock on mobile

    sidebar.classList.toggle("locked");
    if (!sidebar.classList.contains("locked")) {
      sidebar.classList.add("hoverable");
      sidebarLockBtn?.classList.replace("bx-lock-alt", "bx-lock-open-alt");
    } else {
      sidebar.classList.remove("hoverable");
      sidebarLockBtn?.classList.replace("bx-lock-open-alt", "bx-lock-alt");
    }
  };

  // Function to hide the sidebar when the mouse leaves
  const hideSidebar = () => {
    if (isMobile()) return; // Don't auto-hide on mobile

    if (
      sidebar.classList.contains("hoverable") &&
      !sidebar.classList.contains("locked")
    ) {
      sidebar.classList.add("close");
    }
  };

  // Function to show the sidebar when the mouse enters
  const showSidebar = () => {
    if (isMobile()) return; // Don't auto-show on mobile

    if (
      sidebar.classList.contains("hoverable") &&
      !sidebar.classList.contains("locked")
    ) {
      sidebar.classList.remove("close");
    }
  };

  // Function to toggle sidebar open/close
  const toggleSidebar = () => {
    if (isMobile()) {
      // On mobile, use React state instead of DOM manipulation
      const event = new CustomEvent("mobileToggleSidebar");
      document.dispatchEvent(event);
    } else {
      sidebar.classList.toggle("close");
    }
  };

  // ✅ Responsive behavior
  const handleResponsive = () => {
    if (window.innerWidth < 800) {
      sidebar.classList.add("close");
      sidebar.classList.remove("locked");
      sidebar.classList.remove("hoverable");
    } else {
      sidebar.classList.remove("close");
      // Restore previous state on desktop
      if (!sidebar.classList.contains("locked")) {
        sidebar.classList.add("hoverable");
      }
    }
  };

  // Initialize responsive behavior
  handleResponsive();

  // Event listeners
  sidebarLockBtn?.addEventListener("click", toggleLock);

  // Only add hover events for desktop
  if (!isMobile()) {
    sidebar.addEventListener("mouseleave", hideSidebar);
    sidebar.addEventListener("mouseenter", showSidebar);
  }

  sidebarOpenBtn?.addEventListener("click", toggleSidebar);
  sidebarCloseBtn?.addEventListener("click", toggleSidebar);

  // ✅ Handle window resize
  const handleResize = () => {
    handleResponsive();
  };

  window.addEventListener("resize", handleResize);

  // Cleanup when unmounted (important in React)
  return () => {
    sidebarLockBtn?.removeEventListener("click", toggleLock);
    sidebar.removeEventListener("mouseleave", hideSidebar);
    sidebar.removeEventListener("mouseenter", showSidebar);
    sidebarOpenBtn?.removeEventListener("click", toggleSidebar);
    sidebarCloseBtn?.removeEventListener("click", toggleSidebar);
    window.removeEventListener("resize", handleResize);
  };
}
