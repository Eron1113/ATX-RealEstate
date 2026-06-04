<?php
// =====================
//  Theme Setup
// =====================
function realestate_theme_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('menus');
    add_theme_support('widgets');
}
add_action('after_setup_theme', 'realestate_theme_setup');

// =====================
//  Enqueue Styles & Scripts
// =====================
function realestate_enqueue_styles() {
    wp_enqueue_style('realestate-style', get_stylesheet_uri());
    wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap', false);
}
add_action('wp_enqueue_scripts', 'realestate_enqueue_styles');

// =====================
//  Register Menu
// =====================
function realestate_register_menus() {
    register_nav_menus(array(
        'main-menu' => __('Main Menu', 'realestate')
    ));
}
add_action('init', 'realestate_register_menus');

// =====================
//  Custom Post Type: Apartments
// =====================
function create_apartments_cpt() {
    $labels = array(
        'name' => 'Apartments',
        'singular_name' => 'Apartment',
        'menu_name' => 'Apartments',
        'name_admin_bar' => 'Apartment',
        'add_new' => 'Add New',
        'add_new_item' => 'Add New Apartment',
        'new_item' => 'New Apartment',
        'edit_item' => 'Edit Apartment',
        'view_item' => 'View Apartment',
        'all_items' => 'All Apartments',
        'search_items' => 'Search Apartments',
        'not_found' => 'No apartments found.',
    );

    $args = array(
        'labels' => $labels,
        'public' => true,
        'menu_icon' => 'dashicons-admin-home',
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
        'has_archive' => true,
        'rewrite' => array('slug' => 'apartments'),
        'show_in_rest' => true,
    );

    register_post_type('apartments', $args);
}
add_action('init', 'create_apartments_cpt');

// =====================
//  Custom Meta Boxes
// =====================
function add_apartment_meta_boxes() {
    add_meta_box('apartment_details', 'Apartment Details', 'apartment_details_callback', 'apartments', 'normal', 'high');
}
add_action('add_meta_boxes', 'add_apartment_meta_boxes');

function apartment_details_callback($post) {
    $price = get_post_meta($post->ID, 'price', true);
    $square_meters = get_post_meta($post->ID, 'square_meters', true);
    $bedrooms = get_post_meta($post->ID, 'bedrooms', true);
        $year_built = get_post_meta($post->ID, 'year_built', true);
        $floor = get_post_meta($post->ID, 'floor', true);
        $heating = get_post_meta($post->ID, 'heating', true);
        $location = get_post_meta($post->ID, 'location', true);
    ?>

    <p><label><strong>Price (€):</strong></label><br>
        <input type="number" name="price" value="<?php echo esc_attr($price); ?>" style="width:100%;" /></p>

    <p><label><strong>Square Meters (m²):</strong></label><br>
        <input type="number" name="square_meters" value="<?php echo esc_attr($square_meters); ?>" style="width:100%;" /></p>

    <p><label><strong>Bedrooms:</strong></label><br>
        <input type="number" name="bedrooms" value="<?php echo esc_attr($bedrooms); ?>" style="width:100%;" /></p>

        <p><label><strong>Year Built:</strong></label><br>
        <input type="number" name="year_built" value="<?php echo esc_attr($year_built); ?>" style="width:100%;" /></p>

        <p><label><strong>Floor:</strong></label><br>
        <input type="number" name="floor" value="<?php echo esc_attr($floor); ?>" style="width:100%;" /></p>

        <p><label><strong>Heating:</strong></label><br>
        <input type="text" name="heating" value="<?php echo esc_attr($heating); ?>" style="width:100%;" /></p>

        <p><label><strong>Location:</strong></label><br>
        <input type="text" name="location" value="<?php echo esc_attr($location); ?>" style="width:100%;" /></p>

    <?php
    


}

// =====================
//  Save Custom Fields
// =====================
function save_apartment_meta($post_id) {
    if (array_key_exists('price', $_POST)) {
        update_post_meta($post_id, 'price', sanitize_text_field($_POST['price']));
    }
    if (array_key_exists('square_meters', $_POST)) {
        update_post_meta($post_id, 'square_meters', sanitize_text_field($_POST['square_meters']));
    }
    if (array_key_exists('bedrooms', $_POST)) {
        update_post_meta($post_id, 'bedrooms', sanitize_text_field($_POST['bedrooms']));
    }
    if (array_key_exists('year_built', $_POST)) {
        update_post_meta($post_id, 'year_built', sanitize_text_field($_POST['year_built']));
    }
    if (array_key_exists('floor', $_POST)) {
    update_post_meta($post_id, 'floor', sanitize_text_field($_POST['floor']));
    }

    if (array_key_exists('heating', $_POST)) {
    update_post_meta($post_id, 'heating', sanitize_text_field($_POST['heating']));
} 

if (array_key_exists('location', $_POST)) {
    update_post_meta($post_id, 'location', sanitize_text_field($_POST['location']));
}

}
add_action('save_post', 'save_apartment_meta');


function mytheme_customize_register($wp_customize) {
    $wp_customize->add_section('hero_section', array(
        'title' => __('Hero Section', 'mytheme'),
        'priority' => 30,
    ));

    $wp_customize->add_setting('hero_image', array(
        'default' => get_template_directory_uri() . '/assets/images/default-hero.jpg',
        'sanitize_callback' => 'esc_url_raw',
    ));

    $wp_customize->add_control(new WP_Customize_Image_Control($wp_customize, 'hero_image', array(
        'label' => __('Hero Image', 'mytheme'),
        'section' => 'hero_section',
        'settings' => 'hero_image',
    )));

    $wp_customize->add_setting('hero_title', array(
        'default' => 'Find Your Dream Apartment',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('hero_title', array(
        'label' => __('Hero Title', 'mytheme'),
        'section' => 'hero_section',
        'type' => 'text',
    ));

    $wp_customize->add_setting('hero_subtitle', array(
        'default' => 'Browse the latest listings with detailed info and stunning visuals.',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('hero_subtitle', array(
        'label' => __('Hero Subtitle', 'mytheme'),
        'section' => 'hero_section',
        'type' => 'text',
    ));
}


add_action('customize_register', 'mytheme_customize_register');

function btp_numbers_script() {
    wp_enqueue_script('numbers-animation', get_template_directory_uri() . '/js/numbers.js', array(), '1.0', true);
}
add_action('wp_enqueue_scripts', 'btp_numbers_script');


// ===========================
// 🎨 CUSTOMIZER HERO 2 IMAGE
// ===========================
function realestate_customize_register($wp_customize) {

  // Create a section
  $wp_customize->add_section('hero2_section', array(
    'title'       => __('Hero 2 Settings', 'realestate'),
    'priority'    => 30,
    'description' => 'Change the hero image for the Apartments page.'
  ));

  // Add the setting
  $wp_customize->add_setting('hero2_image', array(
    'default' => '',
    'sanitize_callback' => 'esc_url_raw',
  ));

  // Add the control (image uploader)
  $wp_customize->add_control(new WP_Customize_Image_Control($wp_customize, 'hero2_image', array(
    'label'    => __('Hero Image', 'realestate'),
    'section'  => 'hero2_section',
    'settings' => 'hero2_image',
  )));
}
add_action('customize_register', 'realestate_customize_register');
