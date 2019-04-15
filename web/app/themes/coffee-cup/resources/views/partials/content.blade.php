<article @php post_class() @endphp>
  <div class="card mb-4">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h2 class="card-title"><a href="{{ get_permalink() }}">{!! get_the_title() !!}</a></h2>
  @include('partials/entry-meta')
      <p class="card-text"> @php the_excerpt() @endphp</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</article>