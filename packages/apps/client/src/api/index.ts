import axios from "axios"
import { environment } from "../environments/environment.prod"

export const api = axios.create({
  baseURL: environment.apiUrl,
})
