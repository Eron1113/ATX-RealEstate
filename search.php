<?php get_header(); ?>

<main class="search-results">

  <!-- Hero Section -->
  <section class="search-hero">
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <h1 class="search-title">
        <?php printf(__('Search results for: %s', 'realestate'), '<span>' . get_search_query() . '</span>'); ?>
      </h1>
      <p class="search-subtitle">Find your dream apartment or explore other listings below</p>
    </div>
  </section>

  <?php if (have_posts()) : ?>
    <div class="search-grid">
      <?php while (have_posts()) : the_post(); ?>

        <article id="post-<?php the_ID(); ?>" <?php post_class('search-card'); ?>>
          <div class="search-thumb">
            <a href="<?php the_permalink(); ?>">
              <?php if (has_post_thumbnail()) : ?>
                <?php the_post_thumbnail('large'); ?>
              <?php else : ?>
                <img src="<?php echo get_template_directory_uri(); ?>/assets/no-image.jpg" alt="No Image">
              <?php endif; ?>
            </a>
          </div>

          <div class="search-info">
            <h2 class="search-title">
              <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
            </h2>
           <br>

            <?php if (get_post_type() === 'apartment') : ?>
              <div class="search-meta">
                <?php
                $price = get_post_meta(get_the_ID(), 'price', true);
                $area = get_post_meta(get_the_ID(), 'area', true);
                $bedrooms = get_post_meta(get_the_ID(), 'bedrooms', true);
                ?>
                <?php if ($price) : ?><p><strong>💶 Price:</strong> <?php echo esc_html($price); ?> €</p><?php endif; ?>
                <?php if ($area) : ?><p><strong>📏 Size:</strong> <?php echo esc_html($area); ?> m²</p><?php endif; ?>
                <?php if ($bedrooms) : ?><p><strong>🛏️ Bedrooms:</strong> <?php echo esc_html($bedrooms); ?></p><?php endif; ?>
              </div>
            <?php endif; ?>

            <a href="<?php the_permalink(); ?>" class="btn-view">View Details</a>
          </div>
        </article>

      <?php endwhile; ?>
    </div>

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
      <h3>No results found for "<?php echo get_search_query(); ?>"</h3>
      <p>Try using different keywords below:</p>
      <?php get_search_form(); ?>
    </div>
  <?php endif; ?>

  <div class="apartment-back-btn">
  <a href="<?php echo site_url('/apartments/'); ?>" class="btn-back">
    ← Go Back to All Apartments
  </a>
</div>

</main>




<?php get_footer(); ?>
