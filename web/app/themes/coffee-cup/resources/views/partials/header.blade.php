<header class="banner">
  <nav class="navbar navbar-expand-sm navbar-light">
    <div class="container">
      <a class="navbar-brand align-self-center" href="{{ home_url('/') }}">
        <img src="@asset('images/logo/coffee-cat-stock-icon-navbar.png')" height="50px" alt="The logo of coffee cup" />
        <span>{{ get_bloginfo("name", "display") }}</span>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        @if (has_nav_menu('primary_navigation'))
        {!!
          wp_nav_menu( array(
            'theme_location'  => 'primary_navigation',
            'depth'	          => 2,
            'container'       => 'div',
            'container_class' => 'collapse navbar-collapse',
            'container_id'    => 'bs-example-navbar-collapse-1',
            'menu_class'      => 'navbar-nav ml-auto',
            'fallback_cb'     => 'WP_Bootstrap_Navwalker::fallback',
            'walker'          => new WP_Bootstrap_Navwalker(),
          ) );
        !!}
        @endif
      </div>
    </div>
  </nav>
  <nav class="nav-primary"></nav>
</header>
