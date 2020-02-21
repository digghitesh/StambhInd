'''
Created on 29-Jun-2019

@author: hitesh
'''


from enum import Enum

class PaymentStatus(Enum):
    Pending = 0
    Completed = 1
    
class CustomerType(Enum):
    BROKER = 1
    CLIENT = 2
