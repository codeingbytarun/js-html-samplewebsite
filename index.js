    function head(name){
    document.write(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Website template</title>
        <link  href="style.css" rel="stylesheet" >
    </head>
    <style>
        
    </style>
    <body>
        <header>
            <a href="index.html"> ${name}</a>
        </header>
       
    
    
        <nav>
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Get Start</a></li>
            <li><a href="">Tutorial</a></li>
            <li><a href="">Template</a></li>
            <li><a href="">Project</a></li>
            <li><a href="">Contact us</a></li>
          </ul>
        </nav>
        <section>
           
        </body>
        </html>
    
   `);
    }
    function post(count){
        let p=1;
        do {
            document.write(`
            <div class="post">
                <h1> This is a arctical sample. hello</h1>
               <p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque odio nulla, corrupti tempora earum temporibus unde mollitia cum dignissimos illum cupiditate voluptatibus error a eum saepe sequi debitis dolor rerum quis deleniti in cumque harum sapiente voluptatum! Nam maiores, corporis, omnis eum laborum vero inventore quod perferendis iure, molestiae itaque commodi? Eveniet quas esse nobis voluptates. Esse velit eaque veritatis expedita nesciunt facere, perferendis quos quisquam unde obcaecati similique id eum. Repellat, autem esse! Eius non voluptate saepe quibusdam dolor doloremque neque ratione exercitationem hic modi, rem incidunt aperiam libero ea vitae cupiditate esse porro molestiae eos tenetur maxime voluptatibus unde. Quos officiis labore perferendis minima numquam porro natus fugit assumenda reprehenderit. Dolorum labore doloremque pariatur, ullam inventore doloribus dicta error quo suscipit tempora sapiente, excepturi molestiae quos sunt ratione aspernatur eius laboriosam ipsam esse. Possimus perferendis officiis doloremque assumenda ratione dicta nisi sed accusamus sequi, quo modi id unde rerum alias nam laudantium officia tempore, nostrum, placeat vitae earum quos illo itaque veniam? Odit distinctio animi doloremque excepturi pariatur atque tempora tempore, cum reprehenderit asperiores officiis repellat? Eum sunt qui quibusdam repellendus alias aut quam nostrum, obcaecati doloribus fugiat amet earum reprehenderit deserunt at enim nihil quaerat odit ab ex culpa! Quae inventore quaerat numquam. Praesentium hic enim nesciunt ipsum ab dignissimos molestias unde commodi, mollitia, maxime voluptas asperiores odio. Dolore unde dignissimos quia accusantium deserunt placeat sit, perspiciatis obcaecati, quos quaerat molestiae pariatur temporibus ipsam voluptatibus et rerum facilis impedit vero a tenetur nostrum corporis consequuntur nesciunt odio?</p>
               </div>
            `);
            p++;
        }while(p<=count);
    }
    function aside(){
        document.write(`
        <aside>
                <h3>Aside section
                    
                </h3>
            </aside>
        `);
    }
  function footer(){
    document.write(`
    <footer>
    <h4>Copyright 2023 websitetamplate.com</h4>
   </footer>
    `);
  }