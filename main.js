let app = new Vue 
(
    {
        el: '#app',
        data()
        {
            return {
                current: '',
                changeMode: true };
        },
        methods:
        {
            press: function (event)
            {
                let action = this;
                let key = event.target.textContent;

                if (key!='=' && key!="AC" && key!='×' && key!='÷' && key!='√' &&
                    key!="x²" && key!="%" && key!='↩' && key!='±' && key!="sin" &&
                    key!="cos" && key!="tan" && key!="log" && key!="ln" && key!="Inv" &&
                    key!="x!" && key!="π" && key!='e' && key!="Rad" && key!='Deg')
                {
                    action.current += key;
                }
                else if (key=='=')
                {
                    if (action.current.indexOf('^') > -1)
                    {
                        let base = action.current.slice (0, action.current.indexOf('^'));
                        let exponent = action.current.slice (0, action.current.indexOf('^')+1);
                        action.current = eval ('Math.pow(' + base + ',' + exponent + ')');
                    }
                    else
                        action.current = eval (action.current);
                }
                else if (key === "AC")
                    action.current = '';
                else if (key === '×')          
                    action.current += '*';   
                else if (key === '÷')           
                    action.current += '/';  
                else if (key === '+')
                    action.current += '+';
                else if (key === '-')
                    action.current += '-';
                else if (key === '±')
                {
                    if (action.current.charAt(0) === '-')
                        action.current = action.current.slice(1);
                    else
                      action.current = '-' + action.current;
                } 
                else if (key === '↩') 
                    action.current = action.current.substring(0, action.current.length - 1);
                else if (key === '%') 
                    action.current = action.current / 100;
                else if (key === 'π')
                    action.current = action.current * Math.PI;
                else if (key === "x²")
                    action.current = eval(action.current * action.current);
                else if (key === '√')
                    action.current = Math.sqrt(action.current);
                else if (key === "sin")
                    action.current = Math.sin(action.current);
                else if (key === "cos")
                    action.current = Math.cos(action.current);
                else if (key === "tan")
                    action.current = Math.tan(action.current);
                else if (key === "log")
                    action.current = Math.log10(action.current);
                else if (key === "ln")
                    action.current = Math.log(action.current);
                else if (key == "Inv") 
                    action.current = eval(1/action.current);
                else if (key === "x!")
                {
                    if (action.current === 0)
                        action.current = '1';
                    else if (action.current < 0)
                        action.current = NaN;
                    else 
                    {
                        let number = 1;
                        for (let i = action.current; i > 0; i--)
                            number *= i;
                        action.current = number;
                    }
            
                }
                else if (key === 'e')
                    action.current = Math.exp(action.current);
                else if (key === "Rad")
                    action.current = action.current * (Math.PI / 180);
                else if (key === 'Deg')
                    action.current = action.current * (180 / Math.PI);
            },
            changeModeEvent: function ()
            {
                let action = this;
                action.changeMode = !action.changeMode;
            } 
        } 
    }
);