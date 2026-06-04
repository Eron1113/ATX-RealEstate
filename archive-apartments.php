<?php get_header(); ?>

<main class="archive-apartment">

  <!-- 🏙 Hero Section -->
<?php
$hero_image = get_theme_mod('hero2_image');
?>
<section class="archive-hero" style="background-image: url('<?php echo esc_url($hero_image); ?>');">
  <div class="archive-hero-overlay"></div>
  <div class="archive-hero-content">
    <h1 class="archive-title">Available Apartments</h1>
    <p class="archive-subtitle">Find your perfect home from our latest listings</p>
  </div>
</section>


  <!-- 🔍 Filter / Search -->
  <section class="apartment-filter">
    <form method="get" action="<?php echo esc_url(home_url('/')); ?>" class="filter-form">
      <input type="hidden" name="post_type" value="apartment" />
      <input 
        type="search" 
        name="s" 
        class="filter-input"
        placeholder="🔎 Search apartments..." 
        value="<?php echo get_search_query(); ?>" 
      />
      <button type="submit" class="filter-btn">Search</button>
    </form>
  </section>

  <!-- 🏠 Apartments Grid -->
  <?php if (have_posts()) : ?>
    <div class="apartment-grid">
      <?php while (have_posts()) : the_post(); ?>
        <article id="post-<?php the_ID(); ?>" <?php post_class('apartment-card'); ?>>

          <div class="apartment-thumb">
            <a href="<?php the_permalink(); ?>">
              <?php if (has_post_thumbnail()) : ?>
                <?php the_post_thumbnail('large'); ?>
              <?php else : ?>
                <img src="<?php echo get_template_directory_uri(); ?>/assets/no-image.jpg" alt="No Image">
              <?php endif; ?>
            </a>
          </div>

          <div class="apartment-info">
            <h2 class="apartment-title">
              <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
            </h2>

            <div class="apartment-meta">
              <?php
              $price = get_post_meta(get_the_ID(), 'price', true);
              $area = get_post_meta(get_the_ID(), 'area', true);
              $bedrooms = get_post_meta(get_the_ID(), 'bedrooms', true);
              ?>

             
            </div>

            <a href="<?php the_permalink(); ?>" class="btn-view">View Details</a>
          </div>

        </article>
      <?php endwhile; ?>
    </div>

    <!-- Pagination -->
    <div class="pagination">
      <?php
      the_posts_pagination(array(
        'prev_text' => '&laquo; Previous',
        'next_text' => 'Next &raquo;',
      ));
      ?>
    </div>

  <?php else : ?>
    <div class="no-results">
      <h3>No apartments found 😕</h3>
      <p>Try searching again or check back later.</p>
    </div>
  <?php endif; ?>
</main>

<?php get_footer(); ?>
