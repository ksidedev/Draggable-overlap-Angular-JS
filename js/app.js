angular.module('test', [])

.directive('ngMovable', function($document) {
    return {
        restrict: 'A',
        scope: {
            moveOptions: '=ngMovable'
        },
        link: function(scope, elem, attr) {
            var startX, startY, x = 0, y = 0,
            start, stop, drag, container;

            var width  = elem[0].offsetWidth,
            height = elem[0].offsetHeight;

            // Obtain drag options
            if (scope.moveOptions) {
                start  = scope.moveOptions.start;
                drag   = scope.moveOptions.drag;
                stop   = scope.moveOptions.stop;
                var id = scope.moveOptions.container;
                if (id) {
                    container = document.getElementById(id).getBoundingClientRect();
                }
            }

            // Bind mousedown event
            elem.on('mousedown', function(e) {
                e.preventDefault();
                startX = e.clientX - elem[0].offsetLeft;
                startY = e.clientY - elem[0].offsetTop;
                $document.on('mousemove', mousemove);
                $document.on('mouseup', mouseup);
                if (start) start(e);
            });

            mousemove(e);
            mouseup(e);
            setPosition();
        }
    }
})

// Handle drag event
function mousemove(e) {
    y = e.clientY - startY;
    x = e.clientX - startX;
    setPosition();
    if (drag) drag(e);
    //console.log('x: ' + x)
    //console.log('y: ' + y)
}

// Unbind drag events
function mouseup(e) {
    $document.unbind('mousemove', mousemove);
    $document.unbind('mouseup', mouseup);
    if (stop) stop(e);
}

// Move element, within container if provided
function setPosition() {
    if (container) {
        if (x < container.left) {
            x = container.left;
        } else if (x > container.right - width) {
            x = container.right - width;
        }
        if (y < container.top) {
            y = container.top;
        } else if (y > container.bottom - height) {
            y = container.bottom - height;
        }
    }

    elem.css({
        top: y + 'px',
        left:  x + 'px'
    });
}
