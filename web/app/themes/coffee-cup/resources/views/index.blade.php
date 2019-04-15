@extends('layouts.app') 

@section('content')
  @include('partials.page-header')
  
  @if (!have_posts())
    <div class="alert alert-warning">
      {{ __('Sorry, no results were found.', 'sage') }}
    </div>
    {!! get_search_form(false) !!}
  @endif

<div class="container">
  <div class="row posts-grid">
    @while (have_posts()) @php the_post() @endphp
      <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 post-card-wrapper">
        @include('partials.content-'.get_post_type())
      </div>
   
    @endwhile
  </div>
</div>

{!! get_the_posts_navigation() !!}
@endsection