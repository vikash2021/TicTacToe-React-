import React, { Component } from "react";
 

class Player extends Component
{

    handleForm(e)
    {
        e.preventDefault();
        console.log(this.props.player(e.target.player.value))
    }
    render(){
        return (<form onSubmit={(e)=>this.handleForm(e)}>
                    <label>
                         Player X

                    <input type="radio" name="Player" value="X"/>

                    </label>

                    <label>
                        Player O

                        <input type="radio" name="Player" value="O"/>

                    </label>
                    <input type="submit" value="Start"/>

                </form>

        )
    }
}
export default Player;