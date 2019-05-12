<article @php post_class()
@endphp>
  <div class="card mb-4">
    @if (get_the_tags() > 0)
    <div class="badge badge-primary">{{get_the_tags()[0]->name}}</div>
    @endif
    <a href="{{ get_permalink() }}">
      {{the_post_thumbnail('post-thumbnail', array( 'class' => 'card-img-top' ))}}
    </a>
    <div class="card-body">
      <h2 class="card-title"><a href="{{ get_permalink() }}">{!! get_the_title() !!}</a></h2>
      <div class="card-text"> @php the_excerpt()
@endphp</div>
    </div>
    <div class="card-footer text-muted">
      <small class="text-muted">{{get_the_date( 'F, Y' )}}</small>
    </div>
  </div>
</article>
