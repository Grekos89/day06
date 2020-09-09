<script>
    function pow(x, n) {
        let result = x;
        for (let i = 1; i < n; i++) { // вообще не понял смысла этой строчки от куда i и для чего она? 
            result *= x;
        }
        return result;
        }
    }
    let x = prompt("x?", '');
    let n = prompt("n?", '');
    if (n < 1) {
        alert(`Степень ${n} не поддедживается, используйте натуральное число`);

    } else {
        alert(pow(x, n));
    }
</script>