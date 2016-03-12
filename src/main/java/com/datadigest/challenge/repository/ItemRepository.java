package com.datadigest.challenge.repository;

import com.datadigest.challenge.entity.Item;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ItemRepository extends JpaRepository<Item, Integer> {

}
