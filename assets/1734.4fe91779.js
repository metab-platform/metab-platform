const a=[-.28,.32,.87,-.03,.77,-.01,.21,-.27,-.04,.29,.32,.16,-.14,-.72,.54,-.06,.29,-.01,-.27,-.13,-.04,-.15,.1,.33,.33,.57,-.03,.19,.15,-.01,.31,-.13,.66,.17,.2,.13,.77,.43,.18,.6,-.16,.6,.57,-.04,.09,.26,-.02,-.22,-.22,.12,.11,.07,.47,.76,.41,.28,.14,.12,.25,.47,.33,.63,.74,-.13,-.16,0,.68,.46,-.17,-.01,.01,.42,.16,-.16,.69,.11,-.2,.29,.7,-.04,-.53,.3,-.08,.46,-.06,-.17,.41,-.04,-.64,.58,.18,.05,0,-.6,.13,-.24,-.68,-.04,-.21,.28,-.12,.77,.47,-.23,.46,-.06,-.18,-.15,.56,.57,-.01,.19,-.01,-.69,-.03,.62,.26,-.14,-.44,.27,-.14,-.21,.34,-.33,-.02,.38,.65,-.31,0,.7,-.21,-.37,-.1,.13,.39,-.25,-.05,.08,.02,.04,.68,.14,.4,.43,.09,-.05,.02,-.15,.55,-.1,.76,-.11,.08,-.02,-.27,.1,-.25,.13,-.13,.46,0,.68,-.04,.08,.01,.18,.32,-.08,-.04,.47,.05,-.11,-.11,-.46,.42,-.06,-.05,-.01,.11,.68,-.07,0,.15,.78,.36,-.17,.23,.33,.17,-.11,-.15,.03,.07,.4,.6,.86,.64,.55,.05,-.16,.19,.32,.7,.05,-.54,.54,-.07,.19,.19,-.18,-.25,.42,.08,.55,.12,.1,.04,-.17,-.04,-.26,.45,.33,.41,.78,.3,.72,-.13,-.01,.37,.09,-.02,-.17,.28,.91,.18,.14,.38,.08,.06,.09,.15,.48,-.4,-.32,-.08,-.29,.22,.08,.15,-.01,.09,-.34,.38,-.06,.72,-.14,.1,.22,.1,.86,.1,.01,.34,.68,-.2,.43,-.2,.48,-.05,.31,.1,-.27,.7,.93,.61,-.08,.12,.16,.78,-.23,.06,-.23,.37,-.55,.12,.42,-.09,.61,.27,-.06,-.22,.09,.55,-.23,-.05,.59,.06,-.09,.08,.31,.05,.81,-.06,-.12,.21,.09,-.02,.52,-.02,.11,.44,-.12,-.23,.07,.34,.31,.31,.09,.92,.39,.44,.04,.5,.67,.05,.08,.63,-.22,0,.11,-.65,.34,0,.02,-.18,.02,-.08,.25,-.29,-.11,.28,.6,-.19,-.11,.75,.85,.13,.12,.51,-.14,.66,-.31,.16,.08,-.52,.42,.25,.05,.85,.85,.11,.1,.03,-.21,-.12,-.61,.15,.75,.29,0,.09,-.25,-.05,-.18,.3,.16,.04,.5,-.06,.17,.03,.09,.08,.08,.03,.25,.03,.08,.7,.69,.9,-.18,.14,-.03,-.11,.83,-.36,-.14,-.18,.02,-.05,-.15,.88,.13,.11,.11,.44,.85,.61,.5,.89,-.6,-.4,.89,.17,.1,.67,.66,.08,-.62,.14,.65,-.06,-.04,-.03,.72,.72,.12,.01,-.38,-.43,-.19,.22,.18,.09,.74,-.22,.69,.78,.65,.66,.36,.38,-.2,.31,.35,.77,.55,-.29,-.38,.17,.32,-.69,-.12,-.17,-.13,-.22,.76,-.02,.27,.86,.68,-.66,.18,.12,.16,-.34,-.14,-.36,.79,-.08,.75,.57,.15,.06,.6,.63,.04,.88,-.22,.64,.6,.76,.04,.29,-.15,.49,-.33,.22,.87,.12,.16,-.29,-.21,.85,.64,.15,-.14,.54,-.29,.07,-.1,.73,.41,.58,-.24,-.05,.63,.7,.34,.71,-.17,.5,-.15,.31,-.24,.25,-.05,.13,.56,-.01,.86,.04,-.11,.28,.09,.17,.45,.1,.51,.06,.12,-.22,-.19,.03,.14,.22,.28,-.32,.21,.16,.15,-.18,.06,-.13,-.27,.02,.09,.79,-.09,-.12,.72,.86,.91,.4,-.09,-.36,-.4,-.29,-.19,.86,-.06,-.17,-.28,-.17,-.18,-.09,.03,.26,-.1,.85,.89,.15,-.37,.65,.84,-.2,-.32,.13,.08,-.13,.24,.61,-.06,.54,.5,.81,.52,-.16,.76,-.19,.1,.1,.76,-.29,-.52,.62,.81,.32,.11,.56,.71,.85,.2,.65,-.05,0,-.36,.23,-.12,.05,.69,.09,.07,-.22,.05,.82,-.27,-.01,.07,-.03,-.27,.22,-.04,-.1,.04,-.06,.07,.69,-.38,-.12,-.54,-.28,.16,.41,.47,.62,-.21,-.2,-.15,.06,.46,-.33,.22,.41,.65,-.4,.58,.09,.53,-.04,-.63,-.12,.82,.6,.1,.53,-.05,-.3,-.13,.82,.59,.71,.18,.27,.2,.05,-.09,.27,.47,.14,.06,-.11,-.05,.44,-.23,.55,.71,-.43,.07,-.11,-.28,.4,.61,-.08,.18,-.5,.52,.62,-.28,-.09,-.3,-.16,-.29,.09,-.33,.5,.13,.74,-.48,.47,-.19,.17,.64,.03,-.06,-.15,.59,.02,-.03,.67,-.34,.28,.12,0,-.15,-.32,.14,-.19,-.19,-.17,.7,.76,-.08,.43,.46,-.24,-.22,-.12,.82,-.54,.27,.7,.19,.19,-.06,.71,-.19,.24,-.15,.27,.58,-.26,0,-.13,-.38,.06,.72,-.12,.36,.01,-.1,-.03,-.06,.71,.15,-.09,.36,.56,.12,.45,-.07,.62,.5,.34,.77,.71,-.22,-.17,-.03,-.27,-.09,.7,.14,.09,-.31,.3,-.28,.71,.18,.82,-.02,.1,.62,.93,.7,.2,.19,.09,-.06,-.38,-.19,.7,.43,.63,-.06,.88,.36,-.6,.41,-.37,.29,-.42,.82,.63,.27,.15,-.23,.16,-.04,.02,-.2,.7,-.31,.39,-.31,-.7,-.28,.04,.7,.11,-.12,-.31,.54,-.14,.73,-.1,.28,-.22,-.03,-.13,.69,.03,-.05,0,-.07,.05,.12,.29,-.18,.57,.48,-.26,-.39,-.16,.88,-.06,-.11,.21,-.03,-.21,-.05,.18,-.12,.06,.05,.18,.09,.01,-.1,.44,.75,-.13,-.3,-.25,-.11,-.33,.12,-.38,-.42,-.56,.06,-.15,.1,-.18,.13,.11,.08,-.16,.13,-.01,.6,-.05,.67,.66,-.07,.09,.04,.77,-.31,.62,-.59,-.5,.39,.63,.01,-.3,-.25,.57,.62,.21,-.18,.02,-.14,.08,.42,.05,.02,.11,-.11,.05,0,-.07,-.24,.72,.06,.09,-.14,-.41,-.07,-.19,-.11,-.38,.42,.77,.81,.14,.79,.69,.15,.05,.87,.61,.63,.44,-.8,.21,-.1,.54,.7,.13,.06,.02,.3,-.23,.18,-.3,.77,.16,-.07,-.37,-.03,-.21,-.06,-.11,.06,.68,-.02,.6,.09,.55,.14,-.32,-.04,.59,.04,-.11,.15,-.64,-.16,-.09,-.3,.49,-.74,.47,-.1,.02,.24,.03,.61,.79,-.27,-.29,-.17,.12,-.36,-.34,.13,.15,.44,.25,-.29,.07,-.27,-.09,-.11,-.02,.02,0,.19,-.03,-.14,.17,.04,.08,.17,-.01,.19,-.12,.1,-.19,.41,.07,-.12,-.12,-.22,.21,-.36,-.29,.1,.53,.11,.29,.39,.14,-.05,.71,-.07,.22,-.06,-.17,-.05,.27,.12,-.14,.37,.6,-.29,.32,-.09,-.18,.81,-.26,-.18,-.04,.07,.05,-.24,-.11,.57,.09,.49,.33,.13,.04,-.09,-.21,-.11,-.09,.52,-.13,.03,-.04,.35,.2,.06,-.05,.16,.78,-.13,.1,.12,.31,.82,-.07,.24,.85,-.19,.5,.72,.12,-.16,.05,-.09,.22,-.02,.02,-.33,-.16,.31,-.05,-.45,.76,-.15,.87,.6,-.3,-.16,.72,.65,-.34,-.36,-.32,0,.74,.1,.56,.11,.63,0,-.2,.25,.25,-.05,-.26,-.22,-.28,.35,.1,.62,-.21,.55,-.08,.31,-.31,-.03,-.08,.51,.11,-.1,-.3,.68,.81,-.29,.08,.77,.6,-.25,.11,-.35,.6,.1,-.08,.15,.68,.07,.51,.57,.73,-.35,.15,-.35,.21,.75,.07,0,.07,-.24,.17,.08,.25,.34,-.04,.03,.51,.18,.79,.61,.79,.25,.12,.31,-.51,.11,.55,.09,.69,.05,.18,-.14,-.3,-.17,.07,-.05,-.39,.19,.75,.69,-.15,.92,-.05,-.25,-.51,.01,.79,0,-.18,.81,.77,-.37,-.13,.47,.09,.86,.13,.69,-.31,.93,.72,-.13,.9,.17,-.16,-.33,.55,.04,-.3,.49,.63,-.04,-.13,.46,.38,.05,.1,.21,-.09,-.21,.1,.11,-.04,-.18,.78,.08,.79,.52,.42,.05,-.01,.09,.68,.63,.85,-.16,.08,-.02,.05,.22,.44,.03,.66,-.06,-.06,.16,.1,-.24,.39,-.27,-.44,.76,-.61,.78,-.29,-.3,.04,.47,-.08,-.06,.14,.08,.76,-.09,.69,.1,.39,-.33,.43,-.18,-.37,-.14,.46,-.04,.42,-.1,-.11,.03,.82,.13,.05,.08,.12,.45,.67,.54,-.15,-.03,-.08,.83,.26,.67,.53,.26,-.24,0,.07,.62,.2,-.24,.73,.1,.48,.74,-.81,.33,-.21,.18,.23,.37,.71,.13,.12,-.25,-.34,-.29,-.01,-.17,.84,.65,.79,-.25,-.04,.78,-.17,.02,-.13,-.13,-.35,-.05,-.03,.65,.1,-.34,-.38,.17,.35,-.08,.13,.5,-.04,-.26,.27,.22,.71,.39,-.06,.24,.04,.17,.06,.03,.6,.59,-.17,-.15,-.35,-.07,.61,.1,.08,0,-.45,.16,.16,.71,.06,-.1,-.34,-.28,.26,-.4,-.14,-.26,-.14,-.02,.06,.55,.17,-.12,.46,.72,.16,.62,.02,.35,.7,.28,-.32,.02,.74,-.39,-.08,-.14,.25,.83,.47,.46,-.14,.17,-.42,-.17,.72,.71,.23,-.08,-.08,.64,.05,-.09,.3,-.04,.19,.01,-.16,.02,-.27,.05,.65,-.19,-.05,.48,-.08,.07,.74,.23,.54,.43,-.07,-.08,.23,.04,.3,.64,-.43,.56,.13,-.14,-.08,-.21,-.09,.54,-.41,-.46,.21,.25,.69,.43,.56,0,.01,-.13,0,.02,.25,.02,.43,.72,.15,-.2,.53,.62,.07,-.27,-.45,-.04,.74,-.08,.65,.62,.4,-.17,-.02,.61,-.14,.27,-.06,.56,.31,.06,-.07,.32,-.29,.76,.27,.12,.05,.19,.11,-.12,.07,.54,-.13,-.02,.69,.09,-.44,.48,.74,.14,-.01,.2,.4,.12,-.21,.31,-.19,.05,.58,-.31,.45,.27,.06,.19,.17,.35,.05,.13,.64,-.04,.17,-.12,-.21,.51,.19,.03,.77,-.05,.15,.63,.39,.82,.7,.02,.92,.74,.72,-.04,-.2,.09,.29,.4,.3,-.34,.58,.81,.13,.16,.47,.49,.63,.22,.17,0,.75,.2,.31,.02,.39,.34,.49,.01,.71,.91,.16,.55,.1,.61,.08,-.12,.57,.52,-.36,.11,.86,.53,.62,.09,.28,.22,.85,.56,.71,-.26,-.17,.13,-.14,-.28,.74,.08,.17,.43,-.22,.23,.35,.21,.8,.85,-.12,-.23,.85,.01,.2,.82,-.21,-.3,.22,.36,.24,.49,.37,.64,.15,.67,-.24,.51,-.21,.2,-.05,.1,.04,-.01,.88,.09,.56,.15,.41,-.11,.12,.83,.43,.52,.44,.5,-.16,-.13,-.19,.21,.43,-.05,-.37,.47,.67,.48,-.03,.74,-.16,-.03,.53,.01,.45,-.05,.19,.72,.79,.72,.7,.04,.87,.39,.64,.28,-.41,.4,.06,-.54,.51,-.14,.77,-.08,.9,.6,.09,.61,-.23,-.08,.16,.28,.14,.26,.13,-.28,-.06,.21,.07,-.08,-.07,.66,.83,.44,-.01,.55,.48,.39,.54,.44,.71,.03,-.19,-.27,.41,.05,-.53,-.14,.29,.37,.2,.82,.91,.68,-.32,.54,.66,-.2,.08,.05,.7,.56,.16,-.31,-.02,-.03,-.14,.04,.18,1,.41,.64,-.3,.15,.22,.65,.06,-.05,-.25,-.08,.9,-.02,.85,.36,.71,.71,.16,.6,.53,.67,-.01,.18,-.11,.08,-.5,-.19,-.28,-.7,-.03,-.31,-.05,-.07,-.13,.07,.55,.6,-.15,.58,.83,-.58,.88,-.38,-.08,-.5,-.13,.78,.8,.74,.37,-.04,.5,.28,.34,.41,.18,.02,.67,.73,.5,.31,.32,.18,.07,.59,.59,.85,.07,-.03,-.07,-.06,.53,.08,.46,.13,.28,.8,.53,.87,.83,.73,.82,-.05,.7,-.02,-.16,.8,.09,-.28,.01,.62,.7,.63,.23,.11,.59,.32,.87,.26,0,.04,-.13,.09,.05,.54,-.43,.09,-.03,.69,-.23,.28,-.17,-.14,-.2,.01,-.22,-.31,.69,.04,.04,.38,.13,.19,.49,-.25,-.48,-.02,.15,.47,-.14,-.1,.59,.46,.54,-.01,.7,-.32,.57,0,.73,.08,.29,.25,.01,.3,.03,.22,.08,-.54,-.38,-.17,.65,.68,.66,.64,-.28,-.01,.4,.27,.16,.19,-.15,-.06,.57,.78,.01,.57,.63,.12,.25,.28,.82,.66,-.07,-.33,.21,.39,.41,-.06,-.34,.45,-.06,-.26,.01,.79,-.21,.1,.53,.06,-.01,.54,.12,.1,-.12,.75,-.18,.54,.08,.03,-.2,.13,.7,.19,-.01,.19,.16,-.01,.78,.78,.91,-.01,.9,.85,.66,.45,.62,-.08,.12,.29,.58,.01,.23,.1,-.21,.23,.73,.53,-.47,.46,.04,.6,.82,.07,-.07,.17,.03,-.36,-.11,-.01,0,.52,.83,.32,.85,.35,.1,.23,.48,.26,.22,-.24,.49,.46,.6,0,-.2,-.51,.26,.75,.21,.91,.32,.66,.2,-.01,.45,-.47,.57,.76,.78,.3,.64,.38,.73,.46,-.2,.1,.94,.43,.62,.74,.62,.79,-.06,.74,.37,.26,-.11,.63,.61,.64,.69,.71,-.36,.68,.73,.07,-.55,.64,.11,.82,-.36,.02,.67,.37,.71,.77,-.04,.06,.09,-.18,.86,-.08,.58,.46,.58,-.35,-.13,.1,.07,-.18,.14,.1,.08,.05,.68,.1,-.06,.45];export{a as rvalData};
