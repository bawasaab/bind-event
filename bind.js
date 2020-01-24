$( '.designation' ).bind( 'input', function(e) {
    var $this = $(this);
    this.value = $this.val();
    this.value = this.value.replace(/[^A-Za-z]/g,'');
});

$( '.tat' ).bind( 'input', function(e) {
    var $this = $(this);
    this.value = $this.val();
    this.value = this.value.replace(/[^0-9\.]/g,'');
});

// if the content is dynamic content bind the event again after new html update
$( '#designation_'+ box ).bind( 'input', function(e) {
        var $this = $(this);
        this.value = $this.val();
        this.value = this.value.replace(/[^A-Za-z]/g,'');
    });

    $( '#tat_'+ box ).bind( 'input', function(e) {
        var $this = $(this);
        this.value = $this.val();
        this.value = this.value.replace(/[^0-9\.]/g,'');
    });
