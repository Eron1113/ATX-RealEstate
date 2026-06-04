<footer class="site-footer">
  <div class="footer-container">
    
    <!-- Footer Widgets / Menu -->
    <div class="footer-left">
      <?php
      if (has_nav_menu('footer-menu')) {
        wp_nav_menu(array(
          'theme_location' => 'footer-menu',
          'container' => false,
          'menu_class' => 'footer-menu',
        ));
      } else {
      
      }
      ?>
    </div>

    <!-- Footer Center Info -->
    <div class="footer-center">
      <p>&copy; <?php echo date('Y'); ?> <?php bloginfo('name'); ?>. All rights reserved.</p>
      <p>Made with ❤️ by Eron.</p>
    </div>

    <!-- Social Icons -->
    <div class="footer-right">
      <ul class="social-links">
        <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
        <li><a href="#"><i class="fab fa-instagram"></i></a></li>
        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
      </ul>
    </div>

  </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
