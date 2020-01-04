<footer class="footer content-info">
  <section class="container footer-main">
    <a class="navbar-brand align-self-center" href="{{ home_url('/') }}">
      <img src="@asset('images/logo/coffeecup-logo-white.png')" height="50px" alt="The logo of coffee cup" />
    </a>
    {{ dynamic_sidebar('sidebar-footer') }}
{{ wp_nav_menu() }}
  </section>
  <div class="footer-copyright">
    <span>Made with ❤ and a lot of ☕.</span>
    <span> Copyright © {{ date("Y") }}.</span>
    <span> All Rights Reserved.</span>
  </div>
</footer>
