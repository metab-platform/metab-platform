const a=[-.36,.45,.73,-.12,.82,-.01,.21,-.07,.33,.28,.63,.03,-.06,-.73,.75,.02,.37,.03,-.25,-.08,0,-.18,.05,.57,.73,.8,-.16,.05,.1,-.04,.53,-.23,.84,.09,.26,.1,.92,.73,.27,.56,-.04,.82,.46,.04,.05,.59,.13,-.04,.16,.05,.26,.01,.38,.78,.27,.56,.5,.01,.23,.72,.28,.78,.71,-.11,.21,-.03,.85,.72,-.01,-.01,-.05,.62,.22,-.22,.81,.02,-.09,.23,.58,.04,-.47,.6,-.03,.73,-.18,-.18,.73,.03,-.75,.66,-.04,.03,.13,-.67,.14,-.19,-.68,-.06,-.22,.26,-.08,.76,.34,-.1,.39,0,-.12,-.05,.8,.49,.04,.22,-.02,-.56,-.08,.77,.09,-.05,-.26,.68,-.09,-.12,.37,-.14,-.03,.41,.7,-.3,-.03,.93,-.21,-.41,-.09,.06,.49,-.1,-.07,.1,.01,-.07,.79,.04,.6,.75,.01,-.16,.03,-.22,.62,-.15,.76,.01,-.03,.14,-.14,-.06,-.06,.11,-.13,.7,-.16,.54,.01,.13,.16,.17,.53,-.07,-.18,.73,.04,.01,-.13,-.29,.47,.03,-.03,.06,.09,.86,-.02,-.01,.07,.7,.36,-.09,.22,.23,.06,-.18,-.19,.06,.1,.5,.68,.84,.51,.22,.06,-.22,.39,.58,.93,.12,-.45,.43,-.12,.11,.15,-.2,-.19,.79,0,.89,.01,.23,-.12,-.02,.04,-.12,.35,.24,.32,.79,.42,.93,-.15,.01,.2,.02,-.11,-.12,.67,.63,.13,.09,.69,.33,-.11,.1,.28,.76,-.17,-.24,.13,-.13,.09,.21,.17,-.12,-.02,-.2,.26,.12,.81,-.12,.07,.41,.04,.69,.17,-.14,.37,.8,-.2,.34,-.14,.72,.23,.56,.04,-.23,1,.66,.72,-.11,.18,.2,.66,.13,.02,-.07,.48,-.62,.04,.57,.04,.92,-.09,-.07,-.1,.09,.74,-.04,-.02,.46,.42,-.27,.11,.05,.07,.82,-.09,-.13,.07,.39,-.02,.53,-.15,.43,.75,-.13,-.2,.01,.23,.03,-.07,-.09,.63,.22,.68,-.05,.72,.78,-.12,.02,.78,-.31,.03,.06,-.55,.46,.13,.08,-.25,.04,-.01,.27,-.01,-.17,.39,.47,-.31,.01,.9,.71,.06,.05,.41,.06,.66,-.38,.22,.02,-.31,.54,.28,-.02,.63,.7,.48,.18,-.05,-.12,-.09,-.7,.09,.92,.25,.13,.19,-.25,.25,-.22,.22,.08,.26,.64,-.01,0,.13,-.03,.14,.16,.01,.3,-.1,.01,.69,.8,.69,-.16,.08,-.01,.01,.82,-.28,-.23,-.29,-.04,-.19,-.05,.68,.37,.08,.08,.68,.67,.58,.51,.6,-.48,-.29,.69,0,.11,.77,.64,.03,-.33,.11,.82,.11,-.12,.22,.88,.84,-.03,.08,-.4,-.23,-.27,.64,.11,-.16,.76,-.23,.78,.86,.58,.58,.7,.65,.07,.19,.35,.81,.72,.02,-.33,.4,.34,-.87,-.15,-.1,-.13,-.07,.92,-.07,.56,.69,.7,-.65,.15,.01,.12,-.46,-.07,-.44,.77,.02,.92,.58,.23,-.02,.76,.62,.17,.84,-.08,.57,.83,.71,.23,.21,-.04,.28,-.36,.39,.52,.06,.04,-.26,-.34,.77,.88,-.12,.01,.62,-.24,.06,-.3,.6,.49,.76,-.21,-.15,.67,.76,.29,.74,-.09,.72,.02,.26,-.09,.11,-.04,.11,.67,-.08,.79,-.04,-.08,.3,.03,.26,.32,.08,.68,0,-.15,-.15,-.21,-.01,.02,.02,.37,-.44,.15,.1,-.04,-.18,.11,.06,-.2,0,.13,.59,-.11,-.02,.93,.78,.65,.63,-.14,-.37,-.23,-.26,-.11,.7,-.02,.09,-.13,-.07,-.21,-.22,.1,.12,-.05,.56,.65,.22,-.26,.76,.81,-.13,-.37,.09,.19,.06,.27,.6,0,.37,.81,.85,.54,.08,.89,-.12,.05,-.04,.62,-.12,-.77,.62,.71,.29,.19,.65,.82,.74,.17,.58,-.12,-.04,-.16,.23,-.19,.05,.85,-.16,.07,-.22,0,.83,-.11,.09,.13,-.21,-.11,.02,-.05,-.18,-.08,.27,.03,.66,-.23,-.19,-.26,-.22,.05,.32,.34,.77,-.15,-.17,-.18,.06,.72,-.25,.04,.23,.77,-.42,.7,.05,.35,-.06,-.75,-.05,.86,.76,.01,.64,-.06,-.23,.08,.82,.46,.92,0,.37,.15,.11,-.05,.62,.73,.33,.06,-.06,-.08,.26,-.34,.61,.82,-.48,.09,-.05,-.39,.51,.67,-.13,.27,-.5,.77,.81,-.21,-.11,-.29,-.26,-.25,-.11,-.28,.43,.26,.55,-.53,.71,.02,.3,.67,.04,-.01,-.22,.39,-.01,-.13,.83,-.13,.2,.11,-.25,-.19,-.04,.09,-.13,-.17,.01,.65,.89,-.09,.67,.52,-.31,-.21,-.16,.53,-.5,.25,.81,.04,.32,-.11,.92,-.2,.09,-.13,.61,.52,-.31,.06,-.05,-.38,.35,.89,-.08,.37,-.04,.05,-.16,.17,.8,.06,-.05,.41,.62,-.03,.23,-.07,.78,.18,.44,.67,.7,-.23,-.01,.09,-.36,-.14,.81,.08,.01,-.28,.08,-.01,.86,.04,.69,-.03,.04,.77,.63,.54,.22,.17,.04,-.09,-.25,-.19,.43,.65,.83,-.08,.81,.64,-.44,.21,-.1,.27,-.32,.75,.75,.44,.41,-.14,.06,.02,0,-.21,.79,-.21,.52,-.13,-.7,.05,.13,.85,.15,.17,-.15,.66,-.07,.92,-.02,.23,-.05,-.15,-.14,.94,-.12,-.24,-.03,-.1,-.13,.07,.24,-.17,.45,.75,-.12,-.22,-.08,.7,.05,0,.38,.09,-.01,-.03,.4,-.06,.09,.15,.04,-.06,.09,-.01,.53,.86,-.09,-.35,-.37,-.22,-.33,.13,-.01,-.24,-.33,.18,-.13,.02,-.28,-.01,.01,.05,-.06,.09,-.06,.61,.19,.77,.85,-.01,-.07,.29,.78,-.13,.77,-.71,-.52,.23,.73,-.05,-.44,-.25,.45,.86,.19,-.08,.05,.05,-.03,.63,.21,-.06,.14,-.21,-.11,.05,.03,-.27,.55,.29,-.02,-.1,-.28,.02,-.26,-.08,-.39,.54,.78,.76,0,.82,.7,-.01,.06,.71,.75,.78,.69,-.78,.19,-.09,.49,.84,.17,.03,-.07,.65,-.01,0,-.01,.86,.12,.13,-.1,-.02,-.12,-.07,-.05,.32,.84,-.17,.75,.03,.77,.1,-.07,-.05,.57,.12,-.05,.08,-.58,-.14,-.02,-.28,.63,-.67,.6,-.03,-.11,-.03,.08,.66,.81,-.26,-.18,.01,.12,-.16,-.38,.21,.14,.14,.4,-.19,.03,-.15,-.11,-.13,.09,.08,.1,.04,-.04,-.07,.14,0,.19,.24,.02,.21,-.17,.08,.05,.46,-.04,.07,-.19,-.3,.43,-.41,-.42,.14,.71,-.08,.39,.27,.12,-.07,.79,.07,.21,-.04,-.19,-.04,.23,.07,-.13,.45,.91,-.09,.43,.02,-.1,.84,-.16,-.07,-.06,-.01,.18,-.28,-.12,.4,-.11,.56,.2,-.01,.34,-.11,-.34,.01,-.26,.77,.05,.07,.02,.75,.09,.15,-.06,.35,.69,-.16,.12,.1,.25,.8,-.06,.48,.83,-.15,.52,.83,.07,-.18,.07,0,.18,.2,.1,-.31,-.17,.65,-.11,-.38,.72,-.19,.52,.54,-.15,-.06,.81,.72,-.23,-.28,-.42,.36,.71,.38,.69,.06,.61,-.01,-.18,.21,.22,-.05,-.08,-.14,-.25,.78,.07,.85,-.21,.78,-.06,.21,-.29,.12,-.05,.63,-.04,-.16,-.21,.73,.85,-.28,.03,.79,.77,-.35,.08,-.3,.82,.15,.05,.37,.77,.01,.82,.51,.55,-.02,.1,-.3,.13,.58,.13,-.1,.01,-.08,.1,-.01,.63,.55,-.11,.03,.7,.33,.82,.64,.57,.51,-.09,.26,-.67,.03,.46,.16,.9,.18,.46,-.02,-.24,-.14,.11,-.29,-.35,.13,.87,.92,.02,.63,-.14,-.15,-.47,.04,.83,.07,-.21,.66,.71,-.43,.06,.43,.03,.8,0,.64,-.33,.66,.47,-.13,.77,.18,-.29,-.24,.62,-.09,-.05,.71,.53,-.04,-.18,.73,.45,.01,.02,.09,-.07,-.02,.04,-.04,-.01,-.36,.69,.14,.77,.6,.56,0,.01,0,.92,.82,.69,-.1,.03,-.06,.06,.16,.66,.1,.74,-.12,-.11,.03,.19,.04,.28,-.31,-.19,.58,-.64,.78,.02,-.2,.04,.15,-.16,-.06,.18,.09,.74,-.03,.68,.25,.09,-.25,.34,-.25,-.13,-.14,.48,-.05,.54,-.14,.24,.03,.82,.17,-.02,.17,-.19,.76,.78,.54,-.33,-.05,-.09,.63,.6,.48,.78,.39,.05,.07,.17,.75,.15,-.35,.92,-.04,.24,.81,-.79,.21,-.17,.01,.18,.56,.9,.03,.08,-.24,-.31,-.27,-.11,-.23,.65,.76,.43,-.07,.04,.81,-.38,.34,-.2,.2,-.37,.05,0,.71,.37,-.28,-.23,.64,.18,.01,.14,.44,.01,-.12,.19,.05,.43,.47,-.05,.13,.03,.18,-.2,-.07,.41,.59,-.17,-.14,-.4,-.07,.62,.1,.02,-.3,-.39,.06,.12,.63,.01,-.12,-.28,-.39,.21,-.38,.02,-.19,-.13,.02,-.05,.37,.16,.04,.39,.63,.01,.39,.09,.26,.94,.37,-.21,.18,.81,-.3,-.1,-.1,.25,.7,.42,.71,.06,.24,-.31,-.17,.74,.75,.14,-.16,-.11,.88,0,-.01,.2,-.04,.4,.15,.07,.15,.08,.18,.69,-.07,.02,.85,-.04,.05,.72,.14,.78,.75,.01,-.16,.27,-.01,.18,.72,-.28,.76,.05,-.23,-.05,-.19,.02,.35,-.36,-.18,.1,.67,.84,.64,.64,-.06,0,-.02,-.07,-.08,.37,-.08,.27,.62,.29,-.07,.28,.33,-.01,-.19,-.45,-.04,.59,-.08,.56,.39,.31,-.15,-.13,.37,-.11,.36,-.18,.49,.18,-.05,-.08,.25,-.34,.7,.22,-.01,-.06,.38,.12,-.08,.1,.54,.01,.2,.81,.08,-.41,.34,.84,.16,-.08,.54,.63,.2,.15,.27,-.19,.15,.76,-.19,.46,.56,-.07,.05,.3,.27,-.03,.27,.82,-.05,.28,-.09,-.26,.59,.05,.31,.59,0,-.01,.68,.38,.83,.78,-.02,.65,.68,.74,.35,-.3,.01,.58,.08,.59,.06,.64,.6,.04,.04,.64,.44,.66,.55,.18,-.14,.57,.47,.18,.01,.58,.3,.75,.07,.75,.64,.55,.68,.06,.64,-.1,-.11,.41,.77,-.27,.05,.68,.49,.53,.19,.26,.49,.71,.81,.77,-.02,0,.06,.2,-.06,.78,.02,.17,.77,.15,.38,.35,.16,.75,.74,-.18,-.07,.7,.21,.32,.68,-.22,-.03,.61,.33,.22,.59,.21,.7,.23,.76,-.24,.36,.01,-.07,-.01,.16,.05,.28,.72,.14,.48,.2,.26,-.06,.01,.67,.63,.56,.64,.75,-.23,.15,-.03,.18,.28,-.06,-.18,.63,.5,.7,-.1,.57,-.24,-.07,.27,.03,.4,-.24,.09,.84,.81,.74,.76,.03,.64,.28,.5,.35,-.54,.44,.26,-.36,.59,-.16,.6,-.1,.7,.58,.05,.8,-.22,.15,.46,.14,.19,.56,.16,-.16,-.07,.03,.02,-.03,-.03,.78,.86,.7,-.24,.67,.63,.71,.79,.63,.85,.02,-.16,-.12,.65,.01,-.38,-.11,.21,.22,.1,.85,.69,.49,-.19,.83,.36,-.09,.33,.1,.72,.61,.41,-.28,.01,.02,-.1,-.08,.11,.7,.59,.53,-.2,.37,.2,.77,.06,.01,-.28,.04,.71,-.19,.68,.47,.77,.72,0,.47,.58,.76,-.05,.22,-.09,.46,-.51,-.18,-.02,-.65,-.13,-.38,-.11,-.01,-.18,.15,.44,.46,-.19,.85,.81,-.24,.6,-.29,-.15,-.4,-.01,.79,.83,.85,.45,.3,.43,.38,.41,.41,.51,.09,.83,.86,.52,.45,.3,.33,-.04,.45,.76,.74,-.08,.06,.03,-.07,.82,.08,.33,-.04,.47,.9,.71,.64,.83,.86,.68,.01,.49,-.1,-.16,.73,-.09,-.15,-.14,.69,.86,.61,.28,-.02,.44,.17,.68,.17,-.05,.14,-.09,.02,0,.75,-.36,.13,-.11,.78,-.2,.71,-.12,-.18,.03,.05,-.15,-.2,.89,-.08,-.11,.36,.01,.14,.7,-.22,-.44,-.07,.12,.72,-.26,-.17,.53,.34,.35,-.1,.83,-.12,.72,-.03,.93,0,.21,.14,.1,.43,.16,.3,-.03,-.84,-.33,-.1,.56,.65,.73,.49,-.25,.08,.69,.17,.28,.13,-.1,-.1,.72,.76,-.06,.56,.8,.23,.22,-.02,.78,.84,.04,-.17,.17,.36,.4,.11,-.28,.5,.4,-.08,.02,.83,-.28,.07,.73,-.13,-.06,.53,-.02,.16,-.19,.76,-.33,.71,-.08,.09,-.22,-.07,.62,.3,-.11,-.01,.04,-.12,.92,.86,.62,.17,.66,.79,.85,.69,.79,-.11,0,.36,.78,-.13,.35,.01,-.19,.11,.84,.77,-.25,.7,-.07,.33,.78,.13,.16,.08,-.04,-.37,-.12,.03,.11,.58,.78,.49,.81,.35,.13,.26,.23,.4,.05,-.09,.19,.58,.88,.06,-.01,-.66,.1,.74,.38,.71,.15,.87,.07,-.04,.64,-.67,.8,.78,.86,.23,.63,.17,.68,.59,-.02,.53,.7,.75,.41,.92,.83,.84,.13,.93,.41,.16,-.04,.9,.83,.78,.86,.79,-.26,.67,.75,.15,-.64,.88,.04,.82,-.39,0,.63,.37,.82,.76,-.13,.07,.14,-.16,.75,-.05,.62,.48,.64,-.3,-.01,.1,-.02,.01,.24,.29,.06,.03,.82,.09,.08,.45];export{a as rvalData};
