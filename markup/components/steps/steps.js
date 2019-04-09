/*
(function () {
  let lastId;
  const topMenu = $("#navigation-page");
  const menuItems = topMenu.find("a");

  // Anchors corresponding to menu items
  const scrollItems = menuItems.map(function () {
    const item = $($(this).attr("href"));
    if (item.length) {
      return item;
    }
  });

// Bind click handler to menu items
// so we can get a fancy scroll animation
  menuItems.click(function (e) {
    const href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top + -26;
    $('html, body').stop().animate({
      scrollTop: offsetTop
    }, 300);
    e.preventDefault();
  });

  $(window).scroll(function () {
    // Get container scroll position
    const fromTop = $(this).scrollTop() + 50;
    // Get id of current scroll item
    let cur = scrollItems.map(function () {
      if ($(this).offset().top < fromTop)
        return this;
    });
    // Get the id of the current element
    cur = cur[cur.length - 1];
    const id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
      lastId = id;
      // Set/remove active class
      menuItems
        .parent().removeClass("active")
        .end().filter("[href='#" + id + "']").parent().addClass("active");
    }
  });
})();
*/
