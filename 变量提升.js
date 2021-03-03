//思考：既然程序由上到下执行，那是不是先打印web，然后才报错？
        //会发现并没有打印web，是因为解析器在执行之前，会把代码分析一遍，在分析的过程中，进行一个变量提升

        var web ='aa.com';
        console.log(web);
        var classs='abs';

        //思考2:他会打印什么？
        //undefined，因为涉及一个变量提升，var add='asdfg'分为两步，
        //一步是var aad，并把add拿到console前，这时候打印aad，结果一定是undefined
        console.log(aad);
        var aad='asdfg';




        //函数执行之前会有一个解析的环节，这里的web还是会有变量提升
        function hd(){
            if(false){
                var web='abcdefg';

            }
            console.log(web);
        }
        hd();