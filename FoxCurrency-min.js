function foxCurrencyFloat(e){let t=$("#"+e).val();if(!(t.indexOf(",")>=0))return getFoxAsomeNumbers(t);{let n=t.substring(t.indexOf(",")+1,t.length);return getFoxAsomeNumbers(t.substring(0,t.indexOf(",")))+"."+n}}function formatNumber(e){return e.replace(/\D/g,"").replace(/\B(?=(\d{3})+(?!\d))/g,".")}function getFoxAsomeNumbers(e){return e.replace(/\D/g,"").replace(/\B(?=(\d{3})+(?!\d))/g,"")}function formatCurrency(e,t){let n=e.val();if(""===n)return;let r=n;if(n.indexOf(",")>=0){if(n.indexOf(",")===n.length-1)return;let u=n.substring(n.indexOf(",")+1,n.length);r=formatNumber(n.substring(0,n.indexOf(",")))+","+u}else r=formatNumber(n);e.val("R$ "+r);let i=n.length,o=e.prop("selectionStart");o=n.length-i+o,e[0].setSelectionRange(o,o)}$(document).ready(function(){$("input[data-type='currency']").on({keyup:function(){formatCurrency($(this))},blur:function(){formatCurrency($(this),"blur")},onfocusOut:function(){formatCurrency($(this))}})});