<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

<header class="site-header">
  <div class="header-container">
    
    <!-- Logo Section -->
    <div class="site-branding">
      <?php
      if (has_custom_logo()) {
        the_custom_logo();
      } else {
        ?>
        <a href="<?php echo esc_url(home_url('/')); ?>" class="site-title">
          <?php bloginfo('name'); ?>
        </a>
        <p class="site-description"><?php bloginfo('description'); ?></p>
        <?php
      }
      ?>
    </div>


    
    <!-- Navigation Menu -->
    <nav class="main-navigation">
      <?php
      wp_nav_menu(array(
        'theme_location' => 'main-menu',
        'container' => false,
        'menu_class' => 'nav-menu',
        'fallback_cb' => false,
      ));
      ?>
    </nav>

    

  </div>
</header>

<!-- Optional Hero/Divider -->
<div class="header-divider"></div>
