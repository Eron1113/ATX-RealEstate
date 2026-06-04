<?php get_header(); ?>

<main class="page-404">
  <section class="hero-404">
    <h1 class="error-code">404</h1>
    <h2 class="error-message">Oops! Page not found.</h2>
    <p class="error-description">
      The page you are looking for doesn’t exist or has been moved.
      Try searching for an apartment or go back to the <a href="<?php echo home_url(); ?>">homepage</a>.
    </p>

    <div class="search-404">
      <?php get_search_form(); ?>
    </div>
  </section>
</main>

<?php get_footer(); ?>
