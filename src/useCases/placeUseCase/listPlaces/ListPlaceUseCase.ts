import { IPlaceRepository } from '@/infra/repositories/contracts/IPlaceRepository'

export class ListPlaceUseCase {
    constructor (
        private listPlaceRepository: IPlaceRepository
    ){}
    
     async listAll() {
            const data = await this.listPlaceRepository.getAllPlace()
            return data
    }
}