import { useState } from "react";
import { useForm } from "react-hook-form";
import type { PlantInput } from "../types";
import { plantsApi } from "../api";

interface PlantFormProps {
  onSuccess: () => void;
}

export const PlantForm = ({onSuccess}: PlantFormProps) => {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<PlantInput>({
    mode: 'onBlur',
    defaultValues: {
      name: ''
    }
  })

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (data: PlantInput) => {
    setLoading(true);
    setError(null);

    try {
      await plantsApi.create(data);
      onSuccess();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Adding new Plant failed');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="plantform-container">
      <h2>Add new Plant</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <span className="input-name">Plant name:</span>
        <input
          placeholder="Plant name"
          {...register('name', {
            required: 'Plant name is required',
            minLength: { value: 3, message: 'Plant name needs to be at least 3 letters long'},
            maxLength: { value: 50, message: 'Plant name must be no longer than 50 letters'},
            validate: {
              alphanumeric: (value) => /^[a-zA-Z0-9]+$/.test(value) || 'Only letters and numbers allowed'
            }
          })}
        />
        {errors.name && <span className="error">{errors.name.message}</span>}

        <button type="submit">
          {loading ? 'Creating new plant...' : 'Create'}
        </button>
        {error && <div style={{ color: 'red' }}>{error}</div>}
      </form>
    </div>
  )
}