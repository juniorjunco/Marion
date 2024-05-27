// URL Base
const url_base = $('#infos').data('url-base');

// DEBOUNCE (Melhora a performance de funções repetitivas como "Scroll / Resize")
const debounce = function (n, t, u) {
  var e;
  return function () {
    var a = this,
      i = arguments,
      o = function () {
        (e = null), u || n.apply(a, i);
      },
      r = u && !e;
    clearTimeout(e), (e = setTimeout(o, t)), r && n.apply(a, i);
  };
};

// Verifica se o tamanho da tela é menor do que o tamanho passado (Útil em caso de verificação de responsividade)
function isMobileX(screenSize) {
  return $(window).width() < screenSize;
}

// Formata um valor para o formato de moeda real (R$)
function formataMoeda(v, c, d, t) {
  var n = v,
    c = isNaN((c = Math.abs(c))) ? 2 : c,
    d = d == undefined ? ',' : d,
    t = t == undefined ? '.' : t,
    s = n < 0 ? '-' : '',
    i = parseInt((n = Math.abs(+n || 0).toFixed(c))) + '',
    j = (j = i.length) > 3 ? j % 3 : 0;
  return (
    s +
    (j ? i.substr(0, j) + t : '') +
    i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + t) +
    (c
      ? d +
        Math.abs(n - i)
          .toFixed(c)
          .slice(2)
      : '')
  );
}

// Corrige a altura das seções
function fixSecPagHeight() {
  const headerHeight =
    $('.header-full').length > 0 ? $('.header-full').outerHeight() : 0;
  const bannerTitleHeight =
    $('.banner-titulo').length > 0 ? $('.banner-titulo').outerHeight() : 0;
  const footerHeight = $('.footer').length > 0 ? $('.footer').outerHeight() : 0;
  const minSecHeight =
    $(window).height() - (headerHeight + bannerTitleHeight + footerHeight);
  $('.secao').first().css('min-height', minSecHeight);
}
fixSecPagHeight();
$(window).on('resize', debounce(fixSecPagHeight, 100));
