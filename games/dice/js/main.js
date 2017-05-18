var abi = [{
    "constant": true,
    "inputs": [],
    "name": "addr_erc20",
    "outputs": [{
        "name": "",
        "type": "address"
    }],
    "payable": false,
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "amount",
        "type": "uint256"
    }],
    "name": "withdraw",
    "outputs": [],
    "payable": false,
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "maxBet",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "getBank",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "totalEthPaid",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "random_id",
        "type": "bytes32"
    }],
    "name": "timeout",
    "outputs": [],
    "payable": false,
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "owner",
    "outputs": [{
        "name": "",
        "type": "address"
    }],
    "payable": false,
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "name": "",
        "type": "address"
    }],
    "name": "totalRollsByUser",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "ownerStoped",
    "outputs": [{
        "name": "",
        "type": "bool"
    }],
    "payable": false,
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "name": "random_id",
        "type": "bytes32"
    }],
    "name": "getStateByAddress",
    "outputs": [{
        "name": "",
        "type": "uint8"
    }],
    "payable": false,
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "minBet",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "name": "",
        "type": "bytes32"
    }],
    "name": "listGames",
    "outputs": [{
        "name": "player",
        "type": "address"
    }, {
        "name": "bet",
        "type": "uint256"
    }, {
        "name": "chance",
        "type": "uint256"
    }, {
        "name": "seed",
        "type": "bytes32"
    }, {
        "name": "state",
        "type": "uint8"
    }, {
        "name": "rnd",
        "type": "uint256"
    }, {
        "name": "block",
        "type": "uint256"
    }],
    "payable": false,
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "getCount",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "name": "random_id",
        "type": "bytes32"
    }],
    "name": "getStateById",
    "outputs": [{
        "name": "",
        "type": "uint8"
    }],
    "payable": false,
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "random_id",
        "type": "bytes32"
    }, {
        "name": "_v",
        "type": "uint8"
    }, {
        "name": "_r",
        "type": "bytes32"
    }, {
        "name": "_s",
        "type": "bytes32"
    }],
    "name": "confirm",
    "outputs": [],
    "payable": false,
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "name": "random_id",
        "type": "bytes32"
    }],
    "name": "getShowRnd",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "type": "function"
}, {
    "constant": false,
    "inputs": [],
    "name": "Stop",
    "outputs": [],
    "payable": false,
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "name": "",
        "type": "bytes32"
    }],
    "name": "usedRandom",
    "outputs": [{
        "name": "",
        "type": "bool"
    }],
    "payable": false,
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "countRolls",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "adr",
        "type": "address"
    }],
    "name": "setAddress",
    "outputs": [],
    "payable": false,
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "totalEthSended",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "newOwner",
        "type": "address"
    }],
    "name": "transferOwnership",
    "outputs": [],
    "payable": false,
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "PlayerBet",
        "type": "uint256"
    }, {
        "name": "PlayerNumber",
        "type": "uint256"
    }, {
        "name": "seed",
        "type": "bytes32"
    }],
    "name": "roll",
    "outputs": [],
    "payable": false,
    "type": "function"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": false,
        "name": "time",
        "type": "uint256"
    }, {
        "indexed": false,
        "name": "sender",
        "type": "address"
    }, {
        "indexed": false,
        "name": "bet",
        "type": "uint256"
    }, {
        "indexed": false,
        "name": "chance",
        "type": "uint256"
    }, {
        "indexed": false,
        "name": "seed",
        "type": "uint96"
    }, {
        "indexed": false,
        "name": "rnd",
        "type": "uint256"
    }],
    "name": "logGame",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": false,
        "name": "Id",
        "type": "bytes32"
    }],
    "name": "logId",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": false,
        "name": "player",
        "type": "address"
    }],
    "name": "logPlayer",
    "type": "event"
}]
var ks = localStorage.getItem('keystore');
ks = lightwallet.keystore.deserialize(ks);
var sendingAddr;

var login_obj = {};
login_obj["confirmedGames"] = {};
var balance = 1;
var urlBalance = ""; //balance

var betEth = 0.01; //0,2 ставка эфира
var mainnet, openkey, privkey, mainnetAddress, testnetAddress;
var chance = 32768;
var lastTx, count, new_count, sends, paids, password;
var game = false;
var Timer, animate;
var maxBetEth;
var infura = new Infura();
var _callback;
var _arGames = [];
var _arUnconfirmedGames = [];
bankroll = 1000;
var nonceTx = "";
var RndGen;
var addressDice;
// 100000, 64000, "0x639a1fd07cf885e1453fda734ab8f8bcaf6dcdfe70d3231cfca784323f8aeaaa"
// "0x639a1fd07cf885e1453fda734ab8f8bcaf6dcdfe70d3231cfca784323f8aeaaa", 28, "dsf", "hgf"

function toFixed(value, precision) {
    precision = Math.pow(10, precision);
    return Math.ceil(value * precision) / precision;
};

function numToHex(num) {
    return num.toString(16);
};

function hexToNum(str) {
    return parseInt(str, 16);
};

function pad(num, size) {
    var s = num + "";
    while (s.length < size) s = "0" + s;
    return s;
};

function getTimer() {
    var d = new Date();
    var n = d.getTime();
    return n;
}

function isLocalStorageAvailable() {
    try {
        return 'localStorage' in window && window['localStorage'] !== null;
    } catch (e) {
        console.log("localStorage_failed:", e);
        return false;
    }
};

function saveData() {
    if (isLocalStorageAvailable()) {
        var login_str = JSON.stringify(login_obj);
        localStorage.setItem('daocasino_dice', login_str);
    }
}

function loadData() {
    if (isLocalStorageAvailable()) {
        if (localStorage.getItem('daocasino_dice')) {
            var login_str = localStorage.getItem('daocasino_dice')
            login_obj = JSON.parse(login_str);
        }

        testnetAddress = localStorage.getItem(' testnetAddress')
        mainnetAddress = localStorage.getItem('mainnetAddress')
        mainnet = localStorage.getItem('mainnet')
        openkey = localStorage.getItem('openkey')
        privkey = localStorage.getItem('privkey')
        sendingAddr = openkey.substr(2);
    }
    console.log("version 0.55 BET") // VERSION !
    console.log("mainnet:", mainnet)
    console.log("openkey:", openkey)
    console.log("privkey:", privkey)
};

function call(callname, adr) {
    var result;
    var callData;
    switch (callname) {
        case "totalRollsByUser":
            callData = "9288cebc";
            break;
        case "getShowRnd":
            callData = "db571498";
            break;
        case "getTotalRollMade":
            callData = "df257ba3";
            break;
        case "getTotalEthSended":
            callData = "efddba39";
            break;
        case "getTotalEthPaid":
            callData = "71b207f7";
            break;
        case "getStateByAddress":
            callData = "08199931"
            break;
        case "balanceOf":
            callData = "70a08231";
            break;
        case "timeout":
            callData = "795ea18e";
            break;
    }
    callData = "0x" + callData;

    $.ajax({
        type: "POST",
        url: urlInfura,
        dataType: 'json',
        async: false,
        data: JSON.stringify({
            "id": 0,
            "jsonrpc": '2.0',
            "method": "eth_call",
            "params": [{
                "from": openkey,
                "to": addressDice,
                "data": callData + pad(numToHex(adr.substr(2)), 64)
            }, "pending"]
        }),
        success: function (d) {
            result = hexToNum(d.result);
        }
    });

    return result;
};

function setContract() {
    var q_params = (function () {
        var params = {};
        if (window.location.href.split('?').length < 2) {
            return params;
        }
        var parts = window.location.href.split('?')[1].split('&');
        for (var k in parts) {
            var kv = parts[k].split('=');
            params[kv[0]] = kv[1];
        }
        return params;
    }())

    if (q_params.address != undefined) {
        addressDice = q_params.address
        
    } else {
        $.ajax("https://platform.dao.casino/api/proxy.php?a=bankrolls").done(function (d) {
            var _arr = JSON.parse(d)
            if (_arr != undefined) {
                addressDice = _arr[0]
                $("#bankrollers").html("Bankrollers:",_arr.length)
                console.log("BR:",_arr.length)
                initGame();
            } else {
                $("#bankrollers").html("Bankrollers: 0")
                addressDice = "0x1c864f1851698ec6b292c936acfa5ac5288a9d27"
                console.log(addressDice)
                //Действие в случае отсутсвия банкролла
            }
        })
    }
    if(addressDice != undefined){
        initGame();
    } else{
        addressDice = "0x1c864f1851698ec6b292c936acfa5ac5288a9d27"
        initGame();
    }
    
           $("#contract").html('<a target="_blank" href="https://' + getNet() + '.etherscan.io/address/' + addressDice + '">' + addressDice.slice(0, 24) + '...</a>')
 
};



function getContractBalance() {
    bankroll = callERC20("balanceOf", addressDice);
    console.log(addressDice)
    $('#contractBalance').html("CONTRACT ( " + bankroll / 100000000 + " BET )");
};


setInterval(function () {
    if (openkey) {
        balance = $('#balance').html();
        balance = +balance.substr(0, balance.length - 4);
        balance = +balance.toFixed(8);
        if (balance < 0.02 && !game || !balance) {
            disabled(true);
            $("#label").text(" NO MONEY ");
            //$('#randomnum').text("Please, up balance")
        } else if (balance > 0.01 && !game) {
            disabled(false);
            $("#label").text("Click Roll Dice to place your bet:");
        }
        $("#your-balance").val(balance);
    } else {
        $("#label").text("Please, sign in");
        disabled(true);
    }

}, 1000);

function initGame() {
    loadData();
    _callback = response;
    paids = (call("getTotalEthSended", openkey)) / 100000000;
    sends = (call("getTotalEthPaid", openkey)) / 100000000;
    count = call("totalRollsByUser", openkey)
    $("#total-rolls").html(call("getTotalRollMade", openkey));
    $("#total-paid").html(paids.toFixed(3) + ' BET');
    $("#total-send").html(sends.toFixed(3) + ' BET (' + ((paids / sends) * 100).toFixed(2) + '%)');
    getContractBalance();
    Refresh();
 
    if (getAllowance(addressDice) < 1000000) {
        $('#bg_popup').show();
        approve(addressDice, 100000000000);
    }

    var AllowanceProc = setInterval(function () {
        if (getAllowance(addressDice) != 0) {
            $('#bg_popup').hide();
            clearInterval(AllowanceProc)
        }
    }, 5000)

    webSocketConnect("ws://46.101.244.101:8081/ws");
    
};

function disabled(status) {
    $("#slider-dice-one").slider({
        disabled: status
    });
    $("#slider-dice-two").slider({
        disabled: status
    });
    $("#amount-one").attr('readonly', status);
    $("#less-than-wins").attr('readonly', status);
    $("#roll-dice").attr('disabled', status);
    status ? $("#roll-dice").css({
        background: 'gray'
    }) : $("#roll-dice").removeAttr('style');

};

function Refresh() {
    if (betEth == NaN) {
        betEth = 0;
    }
    if (balance != 0) {
        var _bet = (30) / ((65536 - 1310) / chance);
        maxBetEth = Math.min(_bet, balance, 10);
        if (betEth > maxBetEth) {
            betEth = +maxBetEth.toFixed(4);
            // $("#slider-dice-one").slider("option", "max", maxBetEth * 1000);
            // $("#amount-one").val(betEth);
        }
        if (betEth < 0.0001) {
            betEth = 0.0001;
            // $("#amount-one").val(betEth);
        }
        $("#profit-on-win").val(((betEth * (65536 - 1310) / chance) - betEth).toFixed(6));
        $("#payout").val("x" + ((65536 - 1310) / chance).toFixed(5));
        $("#slider-dice-one").slider("option", "max", maxBetEth * 1000);
        $("#amount-one").val(betEth);
        $("#slider-dice-one").slider("value", betEth * 1000);
    }
};

function makeid() {
    var str = "0x";
    var possible = "abcdef0123456789";

    for (var i = 0; i < 64; i++) {
        if (getTimer() % 2 == 0) {
            str += possible.charAt(Math.floor(Math.random() * possible.length));
        } else {
            str += possible.charAt(Math.floor(Math.random() * (possible.length - 1)));
        }
    }

    str = numToHex(str);
    // console.log("makeid:", str);
    return str;
}

function startGame() {
    if (openkey) {
        game = true;
        if (nonceTx != "") {
            nonceTx = numToHex(hexToNum(nonceTx) + 1);
            console.log("NONCE:", nonceTx)
            responseTransaction("roll", nonceTx);
        } else {
            infura.sendRequest("roll", openkey, _callback);
        }
    } else {
        $("#randomnum").text("Sorry, you do not have a key");
    }
}

function responseServer(value, seed) {
    console.log("responseServer:", value);

    var chance = _arGames[seed];
    if (chance) {
		updateRow(seed, value);
		console.log("update:", seed, value);
		
        if (value > chance) {
            $("#randomnum").text("YOU LOSE");

            gameend();
        } else {
            $("#randomnum").text("YOU WIN!");

            gameend();
        }
    } else {
        console.log("Game " + seed + " undefined");
    }
}

function responseTransaction(name, value) {
    var data = "";
    var price = 0;
    var nameRequest = "sendRaw";
    var gasPrice = "0x9502F9000"; //web3.toHex('40000000000');
    var gasLimit = 0x927c0; //web3.toHex('600000');
    if (name == "roll") {
        data = "0x1f7b4f30" + pad(numToHex(chance), 64);
        price = betEth * 100000000;
    }

    var options = {};
    options.nonce = value;
    options.to = addressDice;
    options.gasPrice = gasPrice;
    options.gasLimit = gasLimit;
    // options.value = price;
    // options.data = data;

    if (privkey) {
        if (buf == undefined) {
            console.log("ERROR_TRANSACTION");
        } else {
            // console.log("The transaction was signed:", name);

            if (ks) {
                ks.keyFromPassword("1234", function (err, pwDerivedKey) {
                    if (err) {
                        console.log("ERROR_TRANSACTION:", err);
                        return false;
                    }
                    var seed = makeid();
                    var args = [price, chance, seed];
                    var registerTx = lightwallet.txutils.functionTx(abi, name, args, options);
                    var params = "0x" + lightwallet.signing.signTx(ks, pwDerivedKey, registerTx, sendingAddr);
                    infura.sendRequest(nameRequest, params, _callback, seed);
                    // create list games
                    _arGames[seed] = chance;
                    // var objGame = {time=getTimer(), seed=seed, endGame=false};
                    // _arUnconfirmedGames.push(objGame);
                })
            } else {
                console.log("ERROR_TRANSACTION");
            }
        }
    }
}

function response(command, value, seed) {
    if (value == undefined) {
        if (command == "sendRaw") {
            $("#randomnum").text("Sorry, transaction failed");
            gameend();
        }
        return false;
    }
    if (command == "sendRaw") {
        // console.log("sendRaw:", value);
        var lastTx = value;
        
        addRow(seed.substr(0,10), lastTx, openkey, betEth, chance, 0, 0)
        $("#Tx").html('<a target="_blank" href="https://' + getNet() + '.etherscan.io/tx/' + lastTx + '">' + lastTx.slice(0, 24) + '...</a>')
        $("#randomnum").text("Please, wait . . . ");

        Timer = setInterval(function () {
            new_count = call("totalRollsByUser", openkey);
            // console.log("detected count:", new_count, count);
            if (new_count != count) {
                var result = call("getStateByAddress", openkey);
                // console.log("getStatusGame:", result);
                switch (result) {
                    case 1:
                        // console.log("YOU WIN!");
                        $("#randomnum").text("YOU WIN!");
                        gameend();
                        break;
                    case 2:
                        // console.log("LOSS");
                        $("#randomnum").text("YOU LOSE");
                        gameend();
                        break;
                    case 3:
                        // console.log("Sorry, No money in the bank");
                        $("#randomnum").text("Sorry, no money in the bank");
                        gameend();
                        break;
                    default:
                        // console.log("run game");
                        break;
                }
            }
        }, 3000);
    } else if (command == "responseServer") {
        responseServer(value, seed);
    } else if (command == "roll") {
        nonceTx = value;
        responseTransaction(command, value);
    }
}

function gameend() {
    disabled(false);
    GetLogs();
    clearInterval(Timer);
    clearInterval(animate);
    count = new_count;
    game = false;
    //$('.active').click();
    $('#amount-one').change();
    $("#randomnum").fadeIn("slow", 1)
    Refresh();
};

var socket;

function webSocketConnect(address) {
    var socket = new WebSocket(address);
    socket.onmessage = function (event) {
        JSON.parse(event.data, function (key, value) {
            if (key == 'data')
                parseMsg(value)
        });
    };
    socket.onerror = function (error) {
        console.log("Ошибка " + error.message);
    };

    socket.onopen = function () {
        console.log("Соединение установлено.");
    };

    socket.onclose = function (event) {
        if (event.wasClean) {
            alert('Соединение закрыто чисто');
        } else {
            console.log('Обрыв соединения');
            setTimeout(webSocketConnect(address), 10000);
            console.log('Код: ' + event.code + ' причина: ' + event.reason);
        };

    }

    function parseMsg(mes) {

        var msg = mes.substr(2);
        var player = "0x" + msg.substr(24, 64);
        var bet = hexToNum(msg.substr(64, 64)) / 100000000;
        
        var playerNum = hexToNum(msg.substr(128, 64))
        var chance = playerNum / (65536) * 100;

        var payout = (65536 - 1310) / playerNum
        var profit = payout * bet - bet;

        var state = hexToNum(msg.substr(256, 64));
        var rnd = hexToNum(msg.substr(320, 64));
        var tx = msg.substr(384, 66)

        // if (state == 1) {
        //     state = "<div class=\"icon-w\">WIN</div>";
        //     color = "#d08c49";
        // } else if (state == 2) {
        //     state = "<div class=\"icon-w\" style='background:gray'>LOSE</div>";
        //     profit = -bet;
        //     color = "gray";
        // } else {
        //     state = "...pending..."
        //     color = "gray";
        // }


        addRow(seed, tx, player, bet, playerNum, rnd, state)
 if ($('#table tr').length > 10) {
            $('tr:eq(11)').remove();
        }
    }
}

function addRow(idGame, tx, player, bet, playerNum, rnd, state){
    var color;
            if (state == 1) {
            state = "<div class=\"icon-w\">WIN</div>";
            color = "#d08c49";
        } else if (state == 2) {
            state = "<div class=\"icon-w\" style='background:gray'>LOSE</div>";
            profit = -bet;
            color = "gray";
        } else {
            state = "...pending..."
            color = "gray";
        }

     var chance = playerNum / (65536) * 100;
     var payout = (65536 - 1310) / playerNum;
     var profit = payout * bet - bet;

            $(".dice-table#table").prepend([
                '<tr id="' + idGame + '">',
                    '<td  aria-label="TRANSACTION"><a target="_blank" href="https://' + getNet() + '.etherscan.io/tx/' + tx + '">' + "0x" + player.slice(2, 12) + '...</a> <br></td>',
                    
                    '<td  aria-label="" class="progress">',
                    '<div class="tablebar ui-progressbar ui-corner-all ui-widget ui-widget-content" style="height:10px" >',
                    '<div class="ui-progressbar-value ui-corner-left ui-widget-header" style="width:' + chance + '%; background:' + color + ';margin:0px;"></div></div>',
                    '<div class="tooltip" style="left:' + rnd / 65536 * 100 + '%">' + rnd + '</div>',
                    '</td>',
                    
                    '<td class="state" aria-label="RESULT">' + state + '</td>',
                    '<td  aria-label="BET">' + bet.toFixed(3) + ' BET</td><td  aria-label="PAYOUT">x' + payout.toFixed(3) + '</td><td  aria-label="PROFIT">' + profit.toFixed(3) + ' BET</td></tr>'
             ].join('') );
};

function updateRow(seed, rnd){
	var chance = _arGames[seed]
    var color;
	var state;
	if (chance > rnd) {
		state = "<div class=\"icon-w\">WIN</div>";
		color = "#d08c49";
	} else{
		state = "<div class=\"icon-w\" style='background:gray'>LOSE</div>";
		color = "gray";
	}

	$('tr#'+seed.substr(0,10) + ' td.state').html(state)
	$('tr#'+seed.substr(0,10) + ' td.progress').html(
                    ['<div class="tablebar ui-progressbar ui-corner-all ui-widget ui-widget-content" style="height:10px" >',
                    '<div class="ui-progressbar-value ui-corner-left ui-widget-header" style="width:' + chance/65536*100 + '%; background:' + color + ';margin:0px;"></div></div>',
                    '<div class="tooltip" style="left:' + rnd / 65536 * 100 + '%">' + rnd + '</div>'].join('')
                    )

}

function getMyLogs() {
	$("#table tbody tr").each(function(){
		var t = $(this).find('td[aria-label="TRANSACTION"] a').text()
		if(t != openkey.substr(0,10)){
			$(this).hide();
		}
	})
}

function getAllLogs() {
	$("tr").show();
}