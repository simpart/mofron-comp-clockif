/**
 * @file   mofron-comp-clockif/index.js
 * @brief  clock interface for clock component
 * @author simpart
 */
const mf    = require('mofron');

mf.comp.ClockIf = class extends mf.Component {
    
    /**
     * initialize component
     * 
     * @param p1 (object) paramter or option
     */
    constructor (po) {
        try {
            super();
            this.name('TimeIf');
            this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize dom contents
     * 
     * @param prm : 
     */
    initDomConts (prm) {
        try {
            /* set default string */
            this.hour(this.hour());
            this.minute(this.minute());
            this.second(this.second());
            this.millisec(this.millisec());
            this.start();
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * date object setter/getter
     * default date is current time
     *
     * @param p1 (Date) date object
     * @param p1 (undefined) call as getter
     * @return (Date) date object
     */
    date (prm) {
        try { return this.member('date', 'object', prm, new Date()); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * hour setter/getter
     * default hour is current time
     *
     * @param p1 (number) hour value
     * @param p1 (undefined) call as getter
     * @return (number) hour value
     */
    hour (prm) {
        try {
            if (undefined === prm) {
                return this.date().getHours();
            }
            this.date().setHours(prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * minute setter/getter
     * default minute is current time
     *
     * @param p1 (number) minute value
     * @param p1 (undefined) call as getter
     * @return (number) minute value
     */
    minute (prm) {
        try {
            if (undefined === prm) {
                return this.date().getMinutes();
            }
            this.date().setMinutes(prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * second setter/getter
     * default second is current time
     *
     * @param p1 (number) second value
     * @param p1 (undefind) call as getter
     * @return (number) second value
     */
    second (prm) {
        try {
            if (undefined === prm) {
                return this.date().getSeconds();
            }
            this.date().setSeconds(prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * millisecond setter/getter
     * default millisecond is current time
     *
     * @param p1 (number) millisecond value
     * @param p1 (undefined) call as getter
     * @return (number) millisecond value
     */
    millisec (prm) {
        try {
            if (undefined === prm) {
	        return this.date().getMilliseconds();
	    }
            this.date().setMilliseconds(prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * start time
     *
     * @private method
     */
    start () {
        try {
            /* millisecond interval */
            setInterval(
                (p1) => {
                    try {
                        p1.millisec(p1.millisec());
                    } catch (e) {
                        console.error(e.stack);
                        throw e;
                    }
                },
                10,
                this
            );
            /* second interval */
            setInterval(
                (p1) => {
                    try {
                        p1.hour(p1.hour());
                        p1.minute(p1.minute());
                        p1.second(p1.second());
                    } catch (e) {
                        console.error(e.stack);
                        throw e;
                    }
                },
                1000,
                this
            );
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.comp.TimeIf;
/* end of file */
