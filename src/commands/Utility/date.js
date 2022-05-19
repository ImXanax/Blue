module.exports = {
    name:'date',
    description:"gives back the number of days ",
    execute(client,message,cmd,args,Discord){
        if (!args[0]) return message.channel.send(":small_blue_diamond: No Dates Have Been Provided");
        if (isNaN(args[0]) && isNaN(args[1]) && isNaN(args[2]) && isNaN(args[3]) && isNaN(args[4]) && isNaN(args[5])) {return message.channel.send(":small_blue_diamond: Provided date should be in numbers\n`.date <CurrentYear> <CurrentMonth> <CurrentDay> <Year> <Month> <Day>`\n .date 2021 10 12 2021 11 5")}
        let by ,bm,bd;
        let ay, am,ad;
        by = args[0];
        bm = args[1];
        bd = args[2];
        ay = args[3];
        am = args[4];
        ad = args[5];
        let before = new Date(by ,bm,bd);
        let after = new Date(ay,am,ad);
        let cal = 1000*60*60*24;
        let days = (after - before) /cal;
        message.channel.send(`:small_blue_diamond:First Date: ${by} - ${bm} - ${bd}\n\t:small_blue_diamond:Second Date: ${ay} - ${am} - ${ad}\n\t\t:small_blue_diamond:Days In Between: `+`\`${Math.round(days)}\``);
    }
}