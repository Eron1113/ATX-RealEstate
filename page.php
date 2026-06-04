<?php get_header(); ?>

<main class="page-content">
  <?php if (have_posts()) : while (have_posts()) : the_post(); ?>

    <article id="post-<?php the_ID(); ?>" <?php post_class('static-page'); ?>>
      <header class="page-header">
        <h1 class="page-title"><?php the_title(); ?></h1>
      </header>

      <div class="page-body">
        <?php the_content(); ?>
      </div>

      <?php
      // Optional: comments for static pages
      if (comments_open() || get_comments_number()) :
        comments_template();
      endif;
      ?>
    </article>

  <?php endwhile; endif; ?>
</main>

<?php get_footer(); ?>
