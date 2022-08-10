//this
//Ex1
var data = {
    info: "My name is Moshe",
    logInfo: function(){
        console.log(this.info)
    }
};

data.logInfo();

//Ex2
var user = {
    name: 'Moshe Shoker',
    getName: function(){
        return this.name;
    }

};
console.log(user.getName());

//Ex3
var mail ={
    port: function(){
        return 225;
    },
    send: function(){
        return 'Request to port: ' + this.port();
    }

};
console.log(mail.send());

//Ex4

var data = {
    articles: ['article1','article2','article3','article4'],
    print: function(){
        var $d = document.getElementById('content');
        for (var article of this.articles) {
            $d.innerHTML += '<p>'+article + '</p>';
        }
    }

};
data.print();

//Ex5
 var ob = {
   name: null,
   setName: function(name){
    this.name = name;
   },
   getName :function(){
    return this.name;
   }
 };

var result = ob.setName('Moshe');
console.log(ob.getName());

//Ex6

var product = {
    sizes: ['S','M','L','XL','XXL'],
    print: function(){
        $s = document.getElementById('sizes');
        $s.innerHTML = '<option selected disabled>Select Size:</option>'
        for (var size of this.sizes) {
            $s.innerHTML += '<option>'+ size + '</option>';
        }
    }

};

product.print();

//Ex7

var product = {
    id: 7,
    price: 7.5,
    title: 'milk',
    get: function(myProperty){
        return this[myProperty]
    },
    set: function(myProperty, newValue){
        this[myProperty] = newValue;
    }

};

var p1 = product.get('id');
console.log(p1);

product.set('price',10);
console.log(product['price']);

// classes
//Ex1
function Request(){
    this.url = 'www.google.com';
}

var request = new Request();
console.log(request.url);

//Ex2
var Mail = function(){
    this.port = 225;
    this.send = function(){
    return 'Mail sent by port: ' + this.port;
    }
};

var mail = new Mail();
console.log(mail.send());

//Ex3

function Hash(){
    this.key;
    this.set = function(key){
        this.key = key;
    };
    this.get = function(){
        return this.key;
    }

};

var hash = new Hash();
hash.set('abc123');
console.log(hash.get());

//Ex4
function Http(){
    this.protocol = 'https';
    this.url = 'www.googl.com';
   
};

var http = new Http();
delete http.protocol;
http.url = 'www.bing.com';
http.port = function(){
    return 'Port 225';
};
console.log(http);

//Ex5

function Db(){
    this.names = ['moshe','david','ronen','gadi','yoel'];
    this.render = function(){
        var $r = document.getElementById('names-list');
        for (const name of this.names) {
            $r.innerHTML += '<li>'+ name + '</li>';
        }
    }
};

var db = new Db();
db.render();

//Ex6

function Person(){
    this.name = "Moshe Shoker";
    this.age = 29;
    this.printName = function(){
        console.log(this.name);

    };
};

var person = new Person();

for (const key in person) {
    if(typeof(person[key]) != 'function'){
        console.log(`${key}: ${person[key]}` );
    }
}

//Ex7
function EMail(email){
    this.email = email;
    this.sendMail = function(){
        return 'Mail sent to '+ this.email;
    };
};

var newMail = new EMail("moshe@shoker.co.il");
console.log(newMail.sendMail());

