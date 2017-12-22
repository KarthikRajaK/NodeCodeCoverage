# TOC
   - [Simple Controller Verification](#simple-controller-verification)
     - [Welcome Greetings](#simple-controller-verification-welcome-greetings)
   - [Simple Operation Verification](#simple-operation-verification)
     - [Uppercase Convertor](#simple-operation-verification-uppercase-convertor)
     - [Lowercase Convertor](#simple-operation-verification-lowercase-convertor)
<a name=""></a>
 
<a name="simple-controller-verification"></a>
# Simple Controller Verification
<a name="simple-controller-verification-welcome-greetings"></a>
## Welcome Greetings
Greet as Welcome.

```js
var name = 'Karthik Raja';
var message = controller.greet(name);
expect(message).to.equal('Welcome Karthik Raja');
```

Convert and Greet.

```js
var name = 'KARTHIK-RAJA';
var nameLower = simple.convertLowerCase(name);
var message = controller.greet(nameLower);
expect(message).to.equal('Welcome karthik raja');
```

<a name="simple-operation-verification"></a>
# Simple Operation Verification
<a name="simple-operation-verification-uppercase-convertor"></a>
## Uppercase Convertor
should original value will converted to uppercase.

```js
var name = 'karthik raja';
var nameUpper = simple.convertUpperCase(name);
expect(nameUpper).to.equal('KARTHIK RAJA');
```

should original value will converted and remove - to .

```js
var name = 'karthik-raja';
var nameUpper = simple.convertUpperCase(name);
expect(nameUpper).to.equal('KARTHIK RAJA');
```

<a name="simple-operation-verification-lowercase-convertor"></a>
## Lowercase Convertor
should original value will converted to lowercase.

```js
var name = 'KARTHIK RAJA';
var nameLower = simple.convertLowerCase(name);
expect(nameLower).to.equal('karthik raja');
```

should original value will converted and remove - to .

```js
var name = 'KARTHIK-RAJA';
var nameLower = simple.convertLowerCase(name);
expect(nameLower).to.equal('karthik raja');
```

