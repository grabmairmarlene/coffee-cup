<header class="banner">
  <nav class="navbar navbar-expand-sm">
    <div class="container">
      <a class="navbar-brand align-self-center" href="{{ home_url('/') }}">
        <img src="@asset('images/logo/coffee-cat-stock-icon-navbar.png')" height="50px" alt="The logo of coffee cup" />
        <span>{{ get_bloginfo("name", "display") }}</span>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbar-navigation-items"
        aria-controls="navbar-navigation-items"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      @if (has_nav_menu('primary_navigation'))
      {!!
        wp_nav_menu( array(
          'theme_location'  => 'primary_navigation',
          'depth'	          => 2,
          'container'       => 'div',
          'container_class' => 'collapse navbar-collapse',
          'container_id'    => 'navbar-navigation-items',
          'menu_class'      => 'navbar-nav ml-auto',
          'fallback_cb'     => 'WP_Bootstrap_Navwalker::fallback',
          'walker'          => new WP_Bootstrap_Navwalker(),
        ) );
      !!}
        @endif
    </div>
  </nav>
</header>
