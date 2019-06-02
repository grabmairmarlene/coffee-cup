<footer class="footer content-info">
  <section class="container footer-main">
    <a class="navbar-brand align-self-center" href="{{ home_url('/') }}">
      <img src="@asset('images/logo/coffeecup-logo-white.png')" height="50px" alt="The logo of coffee cup" />
    </a> 
    {{ dynamic_sidebar('sidebar-footer') }}
    {{ wp_nav_menu() }}
  </section>
  <div class="footer-copyright">
    <p class="">Made with ❤ and a lot of ☕. Copyright © {{ date("Y") }}. All Rights Reserved.</p>
  </div>
</footer>