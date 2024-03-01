import { TouchableOpacity } from "react-native"

const DiaRutina = ({ dia, rutina, duracion }) => {

    return(
        <TouchableOpacity style={style.itemContainer} onPress={onPress}>
            <Text style={style.dia}>{dia}</Text>
            <Text style={style.rutina}>{rutina || 'Descanso'}</Text>
            {rutina && <Text style={style.duracion}>{duracion}</Text>}
        </TouchableOpacity>
    )
}

export default DiaRutina;