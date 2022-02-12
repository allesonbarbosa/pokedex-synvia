import styled from 'styled-components'

export const Container = styled.div`
    background-color: #5adae6;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Label = styled.p`
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 22px;
    color: black;
    margin: 30px;
`
export const InputSearch = styled.input`
    width: 342px;
    height: 58px;
    background: rgba(255, 255, 255, 0.25);
    border-radius: 14px;
    border: none;
    outline: none;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
    color: black;
    margin-bottom: 40px;
`
export const ContainerButtonsFilter = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 50px;
    margin-top: 20px;
    max-width: 1000px;
`
export const ButtonReset = styled.button`
        cursor: pointer;
        background: none;
        border: none;
        font-size: 17px;
        font-weight: bold;
        line-height: 20px;
        color: white;
        background: black;
        width: 80px;
        height: 30px;
        border-radius: 14px;
`

export const CardPokemon = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 1200px;
    height: 800px;
    margin: 40px;
    justify-content: center;
    align-items: center;
    gap: 15px;
    overflow-y: scroll;
    ul{
        margin: 40px 0;
        padding: 20px;
        width: 300px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-items: center;
        transform: scale(0.9);
        border-radius: 14px;
        box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.75);
        :hover{
            transform: scale(1);
            transition: all ease 0.2s;
            cursor: pointer;
        }
        &.Normal{
            background: #A8A878;
            box-shadow: 4px 4px 14px #A8A878;
        }
        &.Fighting{
            background: #C03028;
            box-shadow: 4px 4px 14px #C03028;
         }
        &.Flying{
            background: blue;
        }
        &.Poison{
            background: #A040A0;
            box-shadow: 4px 4px 14px #A040A0;
        }
        &.Ground{
            background: #E0C068;
            box-shadow: 4px 4px 14px #E0C068;
        }
        &.Rock{
            background: #B8A038;
            box-shadow: 4px 4px 14px #B8A038;
        }
        &.Bug{
            background: #A8B820;
            box-shadow: 4px 4px 14px #A8B820;
        }
        &.Ghost{
            background: #705898;
            box-shadow: 4px 4px 14px #705898;
        }
        &.Fire{
            background: #F08030;
            box-shadow: 4px 4px 14px #F08030;
        }
        &.Water{
            background: #6890F0;
            box-shadow: 4px 4px 14px #6890F0;
        }
        &.Grass{
            background: #78CB50;
            box-shadow: 4px 4px 14px #78CB50;
        }
        &.Electric{
            background: #F8D030;
            box-shadow: 4px 4px 14px #F8D030;
        }
        &.Psychic{
            background: #F85888;
            box-shadow: 4px 4px 14px #F85888;
        }
        &.Ice{
            background: #98D8D8;
            box-shadow: 4px 4px 14px #98D8D8;
        }
        &.Dragon{
            background: #7038F8;
            box-shadow: 4px 4px 14px #7038F8;
        }
        &.Fairy{
            background: #EE99AC;
            box-shadow: 4px 4px 14px #EE99AC;
        }
        &.Dark{
            background: #222222;
            box-shadow: 4px 4px 14px #222222;
        }
        &.Steel{
            background: #BBBBBB;
            box-shadow: 4px 4px 14px #BBBBBB;
        }
        p,b{
            font-size: 22px;
        }
        img{
            width: 200px;
        }
    }
`
export const ButtonTypes = styled.button`
    cursor: pointer;
    background: none;
    border: none;
    font-size: 17px;
    font-weight: bold;
    line-height: 20px;
    color: white;
    width: 80px;
    height: 30px;
    border-radius: 14px;
    &.Normal{
            background: #A8A878;
            box-shadow: 4px 4px 14px #A8A878;
        }
        &.Fighting{
            background: #C03028;
            box-shadow: 4px 4px 14px #C03028;
         }
        &.Flying{
            background: blue;
        }
        &.Poison{
            background: #A040A0;
            box-shadow: 4px 4px 14px #A040A0;
        }
        &.Ground{
            background: #E0C068;
            box-shadow: 4px 4px 14px #E0C068;
        }
        &.Rock{
            background: #B8A038;
            box-shadow: 4px 4px 14px #B8A038;
        }
        &.Bug{
            background: #A8B820;
            box-shadow: 4px 4px 14px #A8B820;
        }
        &.Ghost{
            background: #705898;
            box-shadow: 4px 4px 14px #705898;
        }
        &.Fire{
            background: #F08030;
            box-shadow: 4px 4px 14px #F08030;
        }
        &.Water{
            background: #6890F0;
            box-shadow: 4px 4px 14px #6890F0;
        }
        &.Grass{
            background: #78CB50;
            box-shadow: 4px 4px 14px #78CB50;
        }
        &.Electric{
            background: #F8D030;
            box-shadow: 4px 4px 14px #F8D030;
        }
        &.Psychic{
            background: #F85888;
            box-shadow: 4px 4px 14px #F85888;
        }
        &.Ice{
            background: #98D8D8;
            box-shadow: 4px 4px 14px #98D8D8;
        }
        &.Dragon{
            background: #7038F8;
            box-shadow: 4px 4px 14px #7038F8;
        }
        &.Fairy{
            background: #EE99AC;
            box-shadow: 4px 4px 14px #EE99AC;
        }
        &.Dark{
            background: #222222;
            box-shadow: 4px 4px 14px #222222;
        }
        &.Steel{
            background: #BBBBBB;
            box-shadow: 4px 4px 14px #BBBBBB;
        }
`