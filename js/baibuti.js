function check()
{
    var name=encodeURIComponent(document.getElementById("name").value);
    var phone=encodeURIComponent(document.getElementById("phone").value);

    var xml=new XMLHttpRequest();
    // xml.open("POST","http://111.230.183.100/BBTSpringBackend/check.php",true);
    xml.open('POST', 'backend/check.php', true);
    xml.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xml.send("name="+name+"&phone="+phone);
    xml.onreadystatechange = function()
    {
        if(xml.readyState==4 && xml.status==200)
        {
            var res=JSON.parse(xml.responseText);
            if(res["code"] == 0)
            {
                location.href="query.html";
            }
            else
            {
                alert(res["msg"]);
            }
        }
    }
}

function load()
{
    var xml=new XMLHttpRequest();
    // xml.open("POST","http://111.230.183.100/BBTSpringBackend/query.php",true)
    xml.open('POST', 'backend/query.php', true);
    xml.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xml.send();
    xml.onreadystatechange=function()
    {
        if(xml.readyState==4 && xml.status==200)
        {
            var res=JSON.parse(xml.responseText);

            showName(res["name"]);
            showGender(res["gender"]);
            showGrade(res["grade"]);
            showCollege(res["college"]);
            showDormitory(res["dormitory"]);
            showPhone(res["phone"]);
            showFirst(res["first"]);
            showSecond(res["second"]);
            showAdjust(res["adjust"]);
            showIntroduction(res["introduction"]);
            showGou();
        }
    }
}

function showName(n)
{
    var name=document.getElementById("name");
    var node=document.createTextNode(n);
    name.appendChild(node);
}

function showGender(g)
{
    var gender=document.getElementById(g);
    gender.checked=true;
}

function showGrade(g)
{
    var grade=document.getElementById(g);
    grade.checked=true;
}

function showCollege(c)
{
    var college=document.getElementById("college");
    var node=document.createTextNode(c);
    college.appendChild(node);
}

function showDormitory(d)
{
    var dormitory=document.getElementById("dormitory");
    var node=document.createTextNode(d);
    dormitory.appendChild(node);
}

function showPhone(p)
{
    var phone=document.getElementById("phone");
    var node=document.createTextNode(p);
    phone.appendChild(node);
}

function showCollege(c)
{
    var college=document.getElementById("college");
    var node=document.createTextNode(c);
    college.appendChild(node);
}

function showFirst(f)
{
    var first=document.getElementById("first");
    var node=document.createTextNode(f);
    first.appendChild(node);
}

function showSecond(s)
{
    var second=document.getElementById("second");
    var node=document.createTextNode(s);
    second.appendChild(node);
}

function showAdjust(a)
{
    var adjust=document.getElementById(a);
    adjust.checked=true;
}

function showIntroduction(i)
{
    var introduction=document.getElementById("introduction");
    var node=document.createTextNode(i);
    introduction.appendChild(node);
}

function showGou()
{
    showGenderGou();
    showGradeGou();
    showAdjustGou();
}

function showGenderGou()
{
    var male=document.getElementById("male");
    var female=document.getElementById("female");

    var maleGou=document.getElementById("maleGou");
    var femaleGou=document.getElementById("femaleGou");

    if(male.checked==true){
        maleGou.style.opacity=1;
    }
    else{
        maleGou.style.opacity=0;
    }

    if(female.checked==true){
        femaleGou.style.opacity=1;
    }
    else{
        femaleGou.style.opacity=0;
    }
}

function showGradeGou()
{
    var gradeOne=document.getElementById("gradeOne");
    var gradeTwo=document.getElementById("gradeTwo");

    var gradeOneGou=document.getElementById("gradeOneGou");
    var gradeTwoGou=document.getElementById("gradeTwoGou");

    if(gradeOne.checked==true){
        gradeOneGou.style.opacity=1;
    }
    else{
        gradeOneGou.style.opacity=0;
    }

    if(gradeTwo.checked==true){
        gradeTwoGou.style.opacity=1;
    }
    else{
        gradeTwoGou.style.opacity=0;
    }
}

function showAdjustGou()
{
    var adjustYes=document.getElementById("adjustYes");
    var adjustNo=document.getElementById("adjustNo");

    var adjustYesGou=document.getElementById("adjustYesGou");
    var adjustNoGou=document.getElementById("adjustNoGou");

    if(adjustYes.checked==true){
        adjustYesGou.style.opacity=1;
    }
    else{
        adjustYesGou.style.opacity=0;
    }

    if(adjustNo.checked==true){
        adjustNoGou.style.opacity=1;
    }
    else{
        adjustNoGou.style.opacity=0;
    }
}

function edit()
{
    location.href="#";
    editName();
    editGender();
    editGrade();
    editCollege();
    editDormitory();
    editPhone();
    editFirst();
    editSecond();
    editAdjust();
    editIntroduction();  
    
    buttonChange();
}

function editName()
{
    var parent=document.getElementById("showName");
    var child=document.getElementById("name");

    var name=child.innerText;
    parent.removeChild(child);

    var input=document.createElement("input");
    input.setAttribute("class","rightOfApply");
    input.setAttribute("value",name);
    input.setAttribute("type","text");
    input.setAttribute("spellcheck","false");
    input.setAttribute("id","name");

    parent.appendChild(input);
}

function editGender()
{
    var male=document.getElementById("male");
    var female=document.getElementById("female");

    male.removeAttribute("disabled");
    female.removeAttribute("disabled");
}

function editGrade()
{
    var gradeOne=document.getElementById("gradeOne");
    var gradeTwo=document.getElementById("gradeTwo");

    gradeOne.removeAttribute("disabled");
    gradeTwo.removeAttribute("disabled");
}

function editCollege()
{
    var parent=document.getElementById("showCollege");
    var child=document.getElementById("college");

    parent.removeChild(child);




    var select = document.createElement("select");
    select.setAttribute('id','college');
    select.setAttribute('type','text');
    select.setAttribute('class','rightOfApply2');
    select.options[0] = new Option("请选择", "0");
    select.options[1] = new Option("机械与汽车工程学院", "1");
    select.options[2] = new Option("建筑学院", "2");
    select.options[3] = new Option("土木与交通学院", "3");
    select.options[4] = new Option("电子与信息学院", "4");
    select.options[5] = new Option("材料科学与工程学院", "5");
    select.options[6] = new Option("化学与化工学院", "6");
    select.options[7] = new Option("轻工科学与工程学院", "7");
    select.options[8] = new Option("食品科学与工程学院", "8");
    select.options[9] = new Option("数学学院", "9");
    select.options[10] = new Option("物理与光电学院", "10");
    select.options[11] = new Option("经济与贸易学院", "11");
    select.options[12] = new Option("自动化科学与工程学院", "12");
    select.options[13] = new Option("计算机科学与工程学院", "13");
    select.options[14] = new Option("电力学院", "14");
    select.options[15] = new Option("生物科学与工程学院", "15");
    select.options[16] = new Option("环境与能源学院", "16");
    select.options[17] = new Option("软件学院", "17");
    select.options[18] = new Option("工商管理学院", "18");
    select.options[19] = new Option("公共管理学院", "19");
    select.options[20] = new Option("马克思主义学院", "20");
    select.options[21] = new Option("外国语学院", "21");
    select.options[22] = new Option("法学院", "22");
    select.options[23] = new Option("新闻与传播学院", "23");
    select.options[24] = new Option("艺术学院", "24");
    select.options[25] = new Option("体育学院", "25");
    select.options[26] = new Option("设计学院", "26");
    select.options[27] = new Option("医学院", "27");
    select.options[28] = new Option("国际教育学院", "28");


    parent.appendChild(select);
}

function editDormitory()
{
    var parent=document.getElementById("showDormitory");
    var child=document.getElementById("dormitory");

    var dormitory=child.innerText;
    parent.removeChild(child);

    var input=document.createElement("input");
    input.setAttribute("class","rightOfApply");
    input.setAttribute("value",dormitory);
    input.setAttribute("type","text");
    input.setAttribute("spellcheck","false");
    input.setAttribute("id","dormitory");

    parent.appendChild(input);
}

function editPhone()
{
    var parent=document.getElementById("showPhone");
    var child=document.getElementById("phone");

    var phone=child.innerText;
    parent.removeChild(child);

    var input=document.createElement("input");
    input.setAttribute("class","rightOfApply");
    input.setAttribute("value",phone);
    input.setAttribute("type","text");
    input.setAttribute("spellcheck","false");
    input.setAttribute("id","phone");

    parent.appendChild(input);
}


function editFirst()
{
    var parent=document.getElementById("showFirst");
    var child=document.getElementById("first");

    parent.removeChild(child);




    var select = document.createElement("select");
    select.setAttribute('id','first');
    select.setAttribute('type','text');
    select.setAttribute('class','rightOfApply2');
    select.options[0] = new Option("请选择", "0");
    select.options[1] = new Option("技术部 - 代码组", "1");
    select.options[2] = new Option("技术部 - 设计组", "2");
    select.options[3] = new Option("技术部（北校专业）", "3");
    select.options[4] = new Option("策划推广部", "4");
    select.options[5] = new Option("编辑部 - 原创写手", "5");
    select.options[6] = new Option("编辑部 - 摄影", "6");
    select.options[7] = new Option("编辑部 - 可视化设计", "7");
    select.options[8] = new Option("视觉设计部", "8");
    select.options[9] = new Option("视频部 - 策划导演", "9");
    select.options[10] = new Option("视频部 - 摄影摄像", "10");
    select.options[11] = new Option("视频部 - 剪辑特效", "11");
    select.options[12] = new Option("外联部", "12");
    select.options[13] = new Option("节目部 - 国语组", "13");
    select.options[14] = new Option("节目部 - 英语组", "14");
    select.options[15] = new Option("节目部 - 粤语组", "15");
    select.options[16] = new Option("人力资源部", "16");
    select.options[17] = new Option("综合管理部 - 行政管理", "17");
    select.options[18] = new Option("综合管理部 - 物资财务", "18");
    select.options[19] = new Option("综合新闻部 - 撰文记者", "19");
    select.options[20] = new Option("综合新闻部 - 摄影记者", "20");
    select.options[21] = new Option("产品运营部（北校专业）", "21");

    // select[2].selected=true;
    parent.appendChild(select);
}

function editSecond()
{
    var parent=document.getElementById("showSecond");
    var child=document.getElementById("second");

    parent.removeChild(child);


    var select = document.createElement("select");
    select.setAttribute('id','second');
    select.setAttribute('type','text');
    select.setAttribute('class','rightOfApply2');
    select.options[0] = new Option("请选择", "0");
    select.options[1] = new Option("技术部 - 代码组", "1");
    select.options[2] = new Option("技术部 - 设计组", "2");
    select.options[3] = new Option("技术部（北校专业）", "3");
    select.options[4] = new Option("策划推广部", "4");
    select.options[5] = new Option("编辑部 - 原创写手", "5");
    select.options[6] = new Option("编辑部 - 摄影", "6");
    select.options[7] = new Option("编辑部 - 可视化设计", "7");
    select.options[8] = new Option("视觉设计部", "8");
    select.options[9] = new Option("视频部 - 策划导演", "9");
    select.options[10] = new Option("视频部 - 摄影摄像", "10");
    select.options[11] = new Option("视频部 - 剪辑特效", "11");
    select.options[12] = new Option("外联部", "12");
    select.options[13] = new Option("节目部 - 国语组", "13");
    select.options[14] = new Option("节目部 - 英语组", "14");
    select.options[15] = new Option("节目部 - 粤语组", "15");
    select.options[16] = new Option("人力资源部", "16");
    select.options[17] = new Option("综合管理部 - 行政管理", "17");
    select.options[18] = new Option("综合管理部 - 物资财务", "18");
    select.options[19] = new Option("综合新闻部 - 撰文记者", "19");
    select.options[20] = new Option("综合新闻部 - 摄影记者", "20");
    select.options[21] = new Option("产品运营部（北校专业）", "21");

    // select[2].selected=true;
    parent.appendChild(select);
}

function editAdjust()
{
    var adjustYes=document.getElementById("adjustYes");
    var adjustNo=document.getElementById("adjustNo");

    adjustYes.removeAttribute("disabled");
    adjustNo.removeAttribute("disabled");
}

function editIntroduction()
{
    var introduction=document.getElementById("introduction");
    introduction.removeAttribute("disabled");
}

function buttonChange()
{
    var button=document.getElementById("edit");
    button.setAttribute("onclick","modification()");
    button.innerText="提交";

    var button=document.getElementById("back");
    button.setAttribute("onclick","location.reload()");
}