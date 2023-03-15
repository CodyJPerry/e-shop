import '../../components/form-input/form-input.styles.scss';

interface FormInputProps {
    label: string; 
    type: string;
    required: boolean; 
    onChange: any; 
    name: string; 
    value: any; 
}


const FormInput: React.FC<FormInputProps> = ({ label, ...otherProps  }): JSX.Element => {
    return (
        <div className="group">
            <input className="form-input" {...otherProps} />
          {  label && (
                <label className={`${otherProps.value.length ? 'shrink' : null} form-input-label`} htmlFor="displayName">{label}</label>
            )}
        </div>
    );
}

export default FormInput;