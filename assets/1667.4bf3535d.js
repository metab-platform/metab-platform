const a=[-.34,.35,.83,-.1,.79,-.13,.16,-.34,0,.33,.34,.16,-.07,-.61,.61,-.05,.27,0,-.22,-.12,0,-.04,.04,.39,.34,.57,.1,.13,.15,.1,.18,-.06,.67,.12,.11,.08,.75,.46,.19,.69,-.06,.62,.57,-.11,.15,.33,-.02,-.27,-.14,.08,.13,.05,.51,.68,.29,.35,.21,.04,.26,.46,.16,.67,.66,-.09,-.03,.06,.62,.51,-.05,.05,-.04,.48,-.03,-.12,.71,.13,-.16,.13,.62,-.05,-.5,.29,-.07,.48,-.03,-.13,.41,.01,-.6,.57,.06,-.01,-.08,-.55,.14,-.25,-.66,-.05,-.26,.15,-.08,.67,.39,-.27,.36,-.02,-.11,-.06,.54,.43,-.02,.12,.02,-.68,-.03,.67,.09,-.07,-.48,.26,-.1,-.08,.35,-.32,.08,.34,.63,-.36,0,.71,-.38,-.47,-.1,.03,.34,-.2,-.17,.02,.03,.02,.62,.11,.39,.43,.03,-.01,-.04,-.23,.41,-.16,.67,-.22,.03,-.06,-.36,-.07,-.16,.07,-.12,.53,-.06,.57,-.02,-.04,-.06,.06,.25,-.05,-.19,.48,.02,-.07,-.28,-.42,.45,-.07,-.12,.13,-.03,.61,-.07,.01,.05,.86,.28,-.16,.22,.2,.03,-.13,-.18,-.16,.11,.34,.49,.75,.51,.42,.01,-.12,.18,.21,.7,-.06,-.54,.44,.04,.06,-.01,-.08,-.39,.44,.03,.54,.04,.01,.03,-.3,-.02,-.16,.29,.24,.26,.72,.21,.72,-.29,-.02,.28,.2,.03,-.24,.32,.86,.27,.07,.43,.18,-.07,.09,.03,.52,-.49,-.42,-.19,-.43,.25,.07,.21,0,0,-.17,.29,-.13,.65,-.07,.08,.2,.07,.91,.14,-.06,.19,.63,-.36,.34,-.11,.48,.04,.39,.12,-.28,.64,.89,.55,.01,.21,.01,.71,-.14,-.05,-.1,.43,-.47,.01,.37,.07,.64,.19,-.04,-.3,.01,.55,-.34,-.13,.57,.12,-.14,-.06,.16,-.06,.82,.01,-.04,.25,.09,-.14,.35,-.18,.18,.45,-.19,-.18,0,.24,.16,.17,.01,.88,.31,.45,.01,.58,.61,-.02,-.03,.62,-.24,.01,.01,-.59,.25,-.01,.07,-.01,.05,.02,.11,-.3,-.12,.15,.6,-.12,-.06,.75,.78,.09,-.06,.54,-.19,.55,-.38,.1,-.02,-.44,.41,.22,.09,.77,.88,.2,.05,-.05,-.12,-.13,-.6,.13,.74,.15,-.01,.18,-.16,.04,-.34,.13,.09,.13,.54,.06,0,.06,.05,.09,.11,-.03,.22,.02,.05,.63,.67,.81,-.12,.18,-.01,-.06,.84,-.25,-.14,-.17,.14,.01,-.19,.78,.17,.02,0,.52,.75,.47,.33,.85,-.59,-.47,.79,.07,.04,.62,.7,-.03,-.6,.03,.65,-.03,.01,.05,.76,.74,.14,-.01,-.41,-.51,-.36,.21,.06,-.04,.78,-.2,.66,.78,.55,.55,.39,.38,-.02,.3,.18,.8,.54,-.11,-.29,.04,.19,-.67,-.19,-.17,-.25,-.17,.76,-.16,.21,.82,.62,-.63,.05,.07,0,-.35,-.09,-.39,.73,.01,.76,.51,.13,-.09,.57,.55,-.05,.76,-.07,.55,.63,.67,-.02,.26,-.25,.41,-.46,.28,.85,.19,.17,-.29,-.22,.82,.65,.11,-.11,.43,-.44,-.08,-.08,.65,.48,.56,-.35,-.12,.49,.73,.16,.6,-.18,.51,-.29,.27,-.26,.15,-.18,.02,.58,.06,.82,-.09,-.18,.13,.07,.14,.39,.16,.46,-.11,.09,-.23,-.3,0,.06,.06,.23,-.44,.23,.18,.07,-.11,.16,-.14,-.18,-.12,.18,.79,-.06,0,.72,.85,.87,.45,-.05,-.31,-.38,-.29,-.11,.78,-.02,-.09,-.41,-.05,-.12,-.09,.06,.15,-.02,.81,.85,.2,-.36,.65,.86,-.26,-.32,.09,.08,-.14,.24,.55,-.17,.39,.54,.82,.41,-.14,.77,-.12,.04,.08,.66,-.42,-.52,.53,.85,.16,-.02,.45,.74,.84,.12,.72,.08,-.09,-.39,.18,-.05,.01,.72,0,-.13,-.19,.07,.81,-.42,.01,.03,-.14,-.26,.08,-.11,-.17,-.01,-.01,-.07,.6,-.49,-.07,-.41,-.25,0,.33,.39,.6,-.31,-.34,-.09,-.08,.44,-.28,.15,.47,.6,-.52,.55,.08,.38,-.02,-.59,-.16,.79,.57,.13,.59,.06,-.28,-.12,.84,.59,.7,.05,.16,.08,.1,-.21,.26,.46,.19,.03,-.05,.08,.36,-.31,.43,.73,-.37,.02,-.09,-.4,.49,.64,-.24,.15,-.44,.54,.59,-.42,-.05,-.31,-.28,-.2,.06,-.34,.42,.08,.75,-.56,.47,-.26,.16,.64,-.07,-.01,-.15,.61,-.04,.12,.56,-.41,.24,-.02,.03,-.17,-.23,.03,-.18,-.19,-.23,.62,.75,-.06,.38,.47,-.23,-.18,-.17,.78,-.49,.13,.65,.23,.06,-.19,.72,-.2,.18,-.14,.28,.47,-.26,.12,-.02,-.4,.12,.73,-.07,.3,-.08,-.18,0,0,.68,.16,-.15,.42,.42,.14,.35,-.06,.6,.42,.38,.78,.64,-.18,-.08,-.04,-.41,-.26,.65,.11,-.05,-.26,.14,-.36,.69,.07,.78,.01,.08,.56,.85,.58,.11,.03,-.02,0,-.29,-.23,.58,.48,.64,-.04,.82,.37,-.63,.28,-.29,.26,-.33,.73,.59,.22,.04,-.24,.09,-.02,.03,-.28,.66,-.28,.37,-.44,-.6,-.18,.05,.73,.13,0,-.43,.57,-.08,.71,-.09,.11,-.11,-.02,-.23,.7,-.11,-.06,.02,.07,.17,-.02,.27,-.13,.43,.49,-.2,-.49,-.14,.77,.01,-.02,.1,.01,-.26,-.01,.21,-.05,.06,-.01,.06,.01,-.11,-.14,.38,.78,-.17,-.3,-.38,-.19,-.25,.01,-.31,-.49,-.55,.04,-.09,-.06,-.34,.05,.13,-.04,-.14,.06,.14,.49,0,.61,.69,-.03,-.16,.03,.7,-.38,.57,-.54,-.44,.27,.56,.01,-.4,-.17,.51,.61,.09,-.04,-.03,-.1,.04,.44,.19,-.1,.03,-.14,.02,.12,-.16,-.17,.68,-.11,-.07,-.24,-.5,-.04,-.38,-.08,-.36,.39,.69,.84,.06,.83,.66,.07,-.15,.84,.64,.68,.49,-.78,.08,-.04,.4,.69,.08,-.07,-.08,.33,-.36,.11,-.35,.67,.17,.07,-.46,-.06,-.25,-.17,-.16,.19,.65,0,.63,-.06,.53,.16,-.32,-.15,.53,.06,-.05,.03,-.6,-.18,.06,-.44,.56,-.66,.5,-.16,-.14,.13,-.08,.45,.76,-.32,-.19,-.28,-.03,-.43,-.41,.05,.08,.27,.16,-.45,-.08,-.39,-.02,-.21,.03,-.01,0,.15,.02,-.1,.16,.05,.05,.21,-.05,.21,-.14,-.02,-.15,.37,-.05,.04,-.29,-.14,.06,-.36,-.43,.08,.55,.08,.33,.33,.13,-.09,.62,.02,.15,-.02,-.27,-.07,.23,.01,-.04,.26,.6,-.39,.33,-.11,-.33,.82,-.14,-.13,-.07,-.09,.02,-.27,-.04,.49,-.03,.41,.38,0,.07,-.16,-.17,-.1,-.25,.5,-.01,-.03,0,.34,.13,-.03,-.03,.14,.74,-.09,.04,.11,.14,.77,-.11,.18,.8,-.29,.39,.71,.05,-.16,.11,-.09,.07,.05,.05,-.26,-.04,.28,-.01,-.5,.72,-.16,.81,.53,-.42,-.2,.64,.61,-.42,-.23,-.36,.1,.71,.16,.57,.09,.56,-.07,-.09,.09,.09,-.02,-.27,-.1,-.2,.36,-.03,.63,-.27,.61,-.09,.2,-.31,-.1,-.15,.53,0,-.03,-.28,.62,.8,-.26,.04,.79,.57,-.33,.02,-.49,.59,.02,.04,.1,.61,0,.5,.59,.71,-.34,.09,-.38,.1,.7,.09,-.14,.01,-.29,.15,.05,.22,.23,-.06,-.08,.48,.11,.76,.68,.66,.22,.04,.22,-.53,.01,.48,.09,.73,.08,.26,.01,-.43,-.21,.01,-.14,-.34,.09,.77,.71,-.01,.88,-.02,-.39,-.66,-.04,.71,-.03,-.22,.69,.62,-.38,-.14,.41,.08,.74,.05,.57,-.46,.87,.77,-.3,.82,.22,-.13,-.33,.59,-.12,-.12,.49,.65,-.14,-.24,.48,.17,-.01,.04,.1,-.01,-.05,-.03,.01,.09,-.19,.67,.02,.81,.41,.46,.04,-.02,.04,.7,.62,.81,-.16,.02,-.11,.04,.26,.42,-.04,.58,-.09,-.06,.05,.11,-.06,.29,-.21,-.53,.64,-.6,.8,-.11,-.43,.14,.32,.06,-.04,.01,.05,.68,-.08,.55,.18,.27,-.47,.41,-.22,-.41,-.2,.38,-.17,.39,-.09,.03,-.01,.82,.1,.06,0,.1,.47,.6,.38,-.23,-.17,-.19,.73,.3,.52,.51,.21,-.09,.02,.09,.7,.06,-.32,.74,.21,.33,.77,-.78,.43,-.25,.11,.19,.23,.73,.11,.14,-.31,-.23,-.32,-.09,-.25,.88,.59,.74,-.09,.05,.69,-.22,.04,-.06,-.05,-.52,-.03,-.11,.54,-.04,-.3,-.17,.21,.2,-.11,.17,.38,-.05,-.3,.08,.02,.53,.3,-.06,.04,-.1,.03,-.04,-.13,.43,.5,-.1,-.32,-.41,-.22,.49,0,-.08,-.02,-.58,.01,.02,.72,.05,-.2,-.46,-.36,.24,-.48,-.12,-.41,-.3,-.02,-.09,.4,.24,-.11,.31,.59,.02,.44,-.04,.21,.71,.17,-.47,.17,.76,-.37,-.22,-.09,.27,.8,.41,.52,-.05,.02,-.25,-.17,.62,.69,.12,-.09,-.06,.66,-.09,-.08,.17,-.07,.2,.07,-.26,-.05,-.25,.09,.64,-.08,-.07,.49,-.1,0,.65,.09,.59,.43,-.07,-.13,.06,.01,.19,.64,-.5,.59,.06,-.31,0,-.2,.02,.33,-.44,-.42,.23,.24,.7,.42,.55,-.08,-.02,-.06,0,-.01,.22,.03,.28,.6,.09,-.21,.4,.48,-.04,-.19,-.53,.07,.66,-.15,.55,.44,.27,-.14,-.07,.42,-.23,.19,-.2,.52,.23,-.11,-.1,.22,-.38,.65,.25,.04,.01,.27,.11,-.06,.11,.4,.03,-.09,.71,-.05,-.36,.29,.78,.05,.01,.26,.31,.25,-.11,.14,-.24,.02,.66,-.29,.35,.31,-.01,.08,.11,.31,.12,.08,.64,-.1,.13,0,-.31,.44,.04,-.04,.62,-.04,.06,.56,.23,.8,.64,-.05,.84,.6,.63,-.04,-.24,.03,.28,.32,.28,-.34,.47,.71,.09,.05,.44,.51,.52,.28,.13,-.09,.66,.3,.24,-.09,.37,.32,.55,.01,.65,.87,.16,.53,.05,.51,-.04,-.05,.43,.53,-.41,.01,.76,.51,.47,0,.13,.42,.79,.53,.66,-.18,-.18,.01,.03,-.32,.77,-.03,.2,.47,-.18,.14,.38,.01,.71,.81,-.07,-.14,.75,-.05,.09,.8,-.19,-.13,.21,.2,.12,.38,.19,.52,.1,.55,-.16,.35,-.01,.15,-.03,.14,.11,.05,.86,.02,.48,.22,.25,-.11,.02,.72,.38,.42,.39,.5,-.26,.02,-.27,.08,.32,-.06,-.37,.45,.55,.46,-.1,.72,-.28,-.05,.41,-.18,.29,-.12,.15,.74,.8,.62,.66,.03,1,.22,.48,.17,-.46,.31,.19,-.62,.41,-.04,.69,0,.86,.47,.09,.58,-.19,-.14,.13,.21,.15,.27,-.01,-.41,.03,.21,.03,.03,-.03,.68,.76,.46,-.09,.5,.55,.44,.44,.47,.73,.08,-.26,-.29,.4,.06,-.52,-.15,.25,.35,.1,.8,.85,.73,-.21,.55,.54,-.1,.11,.14,.65,.42,.03,-.34,-.08,-.04,-.07,-.1,.14,.87,.35,.49,-.4,.11,.09,.61,0,-.01,-.28,-.04,.78,-.02,.84,.47,.68,.7,.14,.49,.44,.56,.17,.21,-.03,.12,-.55,-.15,-.28,-.61,.13,-.42,0,-.13,-.2,.05,.45,.49,-.18,.57,.85,-.46,.84,-.5,.08,-.34,.02,.7,.82,.74,.35,.03,.4,.17,.25,.29,.24,.12,.57,.69,.47,.21,.12,.13,.02,.49,.6,.76,-.03,-.03,.01,-.04,.55,-.02,.32,0,.24,.78,.47,.84,.85,.77,.7,.02,.6,-.05,-.23,.69,-.03,-.28,-.03,.56,.7,.54,.16,.04,.55,.22,.82,.2,-.07,-.03,-.19,.03,-.02,.51,-.4,-.06,-.17,.66,-.18,.32,-.28,-.17,-.13,-.02,-.19,-.26,.7,.05,-.09,.38,.04,.18,.52,-.39,-.53,-.13,.08,.43,-.19,-.18,.5,.33,.39,-.14,.73,-.37,.58,.05,.72,-.1,.17,.1,0,.29,0,.14,.04,-.52,-.22,-.12,.51,.54,.55,.44,-.23,.05,.42,.12,.26,.17,-.02,-.16,.59,.77,-.03,.49,.61,.24,.23,.16,.79,.67,.02,-.4,.03,.2,.22,-.05,-.3,.48,.05,-.27,.04,.82,-.2,.07,.57,-.08,0,.45,.07,.04,-.19,.65,-.2,.52,-.03,.04,-.19,.12,.63,.24,-.04,.12,.05,-.17,.76,.78,.84,-.03,.86,.86,.67,.42,.6,-.02,.19,.17,.6,-.09,.15,.06,-.17,.27,.75,.5,-.51,.5,.04,.51,.85,.12,-.13,.15,.02,-.24,-.2,.06,-.04,.41,.86,.35,.8,.24,.04,.13,.38,.28,.11,-.2,.4,.53,.63,-.03,-.17,-.55,.22,.77,.24,.82,.24,.66,.1,-.04,.4,-.51,.58,.68,.79,.19,.53,.26,.61,.54,-.29,.19,.86,.42,.46,.73,.64,.8,-.07,.72,.38,.16,-.07,.66,.64,.66,.72,.72,-.48,.61,.69,-.03,-.51,.64,.05,.82,-.45,.09,.57,.29,.73,.67,-.01,-.03,.1,-.31,.84,-.15,.48,.4,.58,-.38,-.02,.08,.05,-.16,.03,.18,.11,.09,.69,.03,-.06,.27];export{a as rvalData};
