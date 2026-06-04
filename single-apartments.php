<?php get_header(); ?>

<main class="single-apartment-wrapper">
    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>

        <section class="apartment-detail-section">
            <div class="container">
                <div class="apartment-header">
                    <h1 class="apartment-title"><?php the_title(); ?></h1>
                    <p class="apartment-location">
                        <i class="dashicons dashicons-location"></i>
                      <span>  <?php echo esc_html(get_post_meta(get_the_ID(), 'location', true)); ?> </span>
                    </p>
                </div>

                <div class="apartment-main-content">
                    <div class="apartment-gallery">
                        <?php if (has_post_thumbnail()) : ?>
                            <?php the_post_thumbnail('large', array('class' => 'featured-image')); ?>
                        <?php else : ?>
                            <img src="<?php echo get_template_directory_uri(); ?>/assets/no-image.jpg" alt="No image available">
                        <?php endif; ?>
                    </div>

                    <div class="apartment-info-card">
                        <div class="price-box">
                            <h2>€<?php echo esc_html(get_post_meta(get_the_ID(), 'price', true)); ?></h2>
                            <p>For Sale</p>
                        </div>

                        <div class="info-grid">
                            <div class="info-item">
                                <i class="dashicons dashicons-admin-home"></i>
                                <span><?php echo esc_html(get_post_meta(get_the_ID(), 'square_meters', true)); ?> m²</span>
                            </div>
                            <div class="info-item">
                                <i class="dashicons dashicons-bed"></i>
                                <span><?php echo esc_html(get_post_meta(get_the_ID(), 'bedrooms', true)); ?> Bedrooms</span>
                            </div>
                            <div class="info-item">
                                <i class="dashicons dashicons-admin-multisite"></i>
                                <span><?php echo esc_html(get_post_meta(get_the_ID(), 'bathrooms', true)); ?> Bathrooms</span>
                            </div>
                        </div>

                        
                    </div>
                </div>

                <div class="apartment-description-section">
                    <h2>About this Apartment</h2>
                    <div class="apartment-description">
                        <?php the_content(); ?>
                    </div>

                    <div class="extra-details">
                        <h3>Additional Information</h3>
                        <ul>
                            <li><strong>Year Built:</strong> <?php echo esc_html(get_post_meta(get_the_ID(), 'year_built', true)); ?></li>
                            <li><strong>Floor:</strong> <?php echo esc_html(get_post_meta(get_the_ID(), 'floor', true)); ?></li>
                            <li><strong>Heating:</strong> <?php echo esc_html(get_post_meta(get_the_ID(), 'heating', true)); ?></li>
                        </ul>
                    </div>

                    <div class="back-to-list">
                        <a href="<?php echo site_url('/apartments'); ?>" class="btn-back">← Back to Listings</a>
                    </div>
                </div>
            </div>
        </section>


    <?php endwhile; else : ?>
        <section class="no-apartment">
            <div class="container">
                <h2>Sorry, this apartment could not be found.</h2>
                <a href="<?php echo site_url('/apartments'); ?>" class="btn-back">Return to Listings</a>
            </div>
        </section>
    <?php endif; ?>
</main>

<?php get_footer(); ?>
