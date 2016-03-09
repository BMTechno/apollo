/** ------------------------------------------------------------------------- *\
 * Category UI Scripts
 * @author Rezki
 ** ------------------------------------------------------------------------- */

function _toggleActive( $el ) {
    var $parent = $el.parents()
        .filter( function() {
            return $(this).data('cat') === 'l1';
        }).eq(0);

    var $siblings = $parent.siblings()
    ,   $prev = $parent.prev()
    ,   $prevFar = $prev.prev()
    ,   $next = $parent.next()
    ,   $nextFar = $next.next()
    ,   $grandParent = $parent.parent();

    if ( !$parent.hasClass('is-active') ) {
        $parent.removeClass('is-inactive').toggleClass('is-active');
        $siblings.removeClass('is-inactive').removeClass('is-active');

        if ( $(document).width() >= 1024 ) {
            if ( $parent.index() === 1 || $parent.index() === 4 || $parent.index() === 7 ) {
                $prev.addClass('is-inactive');
                $next.addClass('is-inactive');
            }
            else if ( $parent.index() === 0 || $parent.index() === 3 || $parent.index() === 6 ) {
                $next.addClass('is-inactive');
                $nextFar.addClass('is-inactive');
            }
            else if ( $parent.index() === 2 || $parent.index() === 5 || $parent.index() === 8 ) {
                $prev.addClass('is-inactive');
                $prevFar.addClass('is-inactive');
            }
        }
    } else {
        $parent.removeClass('is-active');
        $siblings.removeClass('is-inactive');
    }
}

export function registerL1Click() {

    var $el = ( $(this).length ) ? $(this) : $( '.cat-l1__item' );

    if ( !$el.length ) return;

    $(document).on( 'click', $( '.cat-l1__item' ), function(e) {
        // e.preventDefault();
        _toggleActive( $(e.target) );
    });

    return $el;
}
