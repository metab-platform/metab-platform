const a=[.25,.13,0,.11,.03,0,.43,.01,.53,.02,0,.9,.56,.21,0,.37,.27,.22,.15,.1,.63,.57,.48,0,.02,.35,.17,.26,0,.01,.86,.7,.01,.4,.63,.35,0,0,.91,0,.02,.14,.47,.46,.88,0,.18,.15,.56,.91,.01,.02,.01,.02,.06,0,.01,.02,.05,.03,.22,.01,.3,.49,.95,.94,.54,0,.49,.63,.99,0,.02,.66,.05,.47,.35,.06,0,.39,.42,.4,.7,.94,.64,.39,.62,.7,.04,.01,0,.94,.09,.02,.34,0,.55,.1,0,.01,.71,.29,.12,.91,.07,.79,.09,.04,.06,.36,.18,.95,.86,.04,.08,.06,.26,.69,.03,.17,.88,.98,.13,.01,1,.72,.21,0,.83,0,0,.01,.19,.44,.01,0,.02,.24,.33,.06,.72,.19,.18,.57,.16,.91,.36,0,.24,.55,.33,.65,.6,.13,0,0,.08,.56,.1,0,0,.03,.73,.09,.06,.05,.06,.63,0,.07,.14,.56,0,.09,.63,.68,.18,.03,.02,.01,.82,.8,.92,0,.17,.01,.11,.8,.06,.21,.2,0,.94,.36,.61,.02,.06,.09,.85,.42,0,.24,0,.73,.91,.34,.41,0,.05,.24,0,0,.8,0,.02,.92,.19,.01,.7,.01,0,.06,.03,.02,.09,0,0,.94,.05,.03,.56,.06,.01,0,.2,.23,0,0,.01,.44,.99,0,0,0,.08,.45,.89,.12,.39,.94,.03,.16,.04,0,.94,.59,.95,.28,.69,0,.02,0,.86,.75,0,.07,.22,.51,0,.05,.78,.77,0,0,.09,.3,.09,.09,0,.71,.01,0,0,.1,0,.05,0,0,0,.14,.04,.04,.06,.96,0,.98,0,.54,.75,.2,.5,.01,.64,.33,.24,.58,0,.88,0,0,.25,.98,.18,.1,0,.16,.04,0,0,.01,.87,.69,0,.48,.23,0,.23,0,.36,0,.13,.08,.29,.55,.72,.14,1,.01,.25,.69,.94,.76,.19,.42,0,0,.57,0,.18,.04,.75,.01,.99,0,.02,0,.17,.28,.07,0,.04,.37,0,.22,.62,.01,0,0,.01,.4,.17,.45,.07,0,.06,.01,.59,.39,.08,0,.77,.17,.4,.47,.11,.31,.3,.47,.06,.01,.01,.48,.03,.01,0,0,.72,.53,0,.98,.38,0,.02,.28,.04,.76,0,.08,.2,0,0,.08,0,.01,0,.48,.72,.59,.01,.03,.22,0,.47,.45,.14,0,0,.85,0,.06,0,0,.24,.83,0,0,.3,.32,.02,.62,.02,.78,.89,.17,0,0,0,.2,.41,.55,.1,.17,.03,0,.62,0,.79,0,0,.04,.09,.1,.21,.01,.8,0,.1,.76,.8,0,0,0,.03,.09,0,.03,0,.03,.01,.01,.47,0,.33,.15,0,0,.01,0,.66,.01,.6,.78,.06,.02,.07,.01,.05,.08,.08,0,0,0,.17,.15,.19,.02,0,.3,0,.09,.74,0,.29,.01,0,.05,.28,.03,0,.41,.61,.05,0,.14,.01,.28,.01,.58,0,.12,0,.08,.82,.24,.1,.21,0,.71,0,.53,.08,0,.4,.09,.47,.07,.01,.1,0,0,0,0,0,0,.01,.3,.78,.03,.87,.93,0,.56,.01,0,.24,.66,.59,.13,.09,.33,.07,.01,0,.6,.75,0,.45,.08,.54,.31,.76,.18,.09,0,.34,0,0,.55,.25,0,.49,.66,.58,.19,0,.02,.08,0,0,.15,.16,.01,.13,.88,.09,.33,0,.01,.11,0,.63,0,.01,0,.5,.19,.01,.43,.11,.51,0,.1,0,.88,0,.74,.11,0,.08,.63,.86,0,.12,.01,.18,.75,.03,.21,.04,.6,.03,.15,.65,.47,.85,.57,0,.37,.35,.24,.99,.25,.01,.01,.03,.68,0,.28,.13,.92,.01,.94,.01,0,.76,.63,.74,0,.83,.36,.15,.78,.13,.01,.08,0,.79,.02,.04,.35,.82,0,0,.05,0,.84,.57,.23,.15,0,.9,0,0,.69,.06,.02,.01,.71,.02,.03,.88,.01,.26,.03,.3,.69,.49,.23,.74,.28,.24,.35,.31,.91,.31,.29,.24,.18,.08,.1,.02,.26,0,.44,.12,.54,.84,.93,.93,.61,.75,.76,.02,.83,.58,0,0,.11,.23,.84,0,.28,.16,.13,.4,.39,.48,0,.03,.13,.76,.01,.8,.04,0,.11,0,1,.71,.44,.38,.66,.21,.05,.61,0,.76,.13,.14,0,0,0,.07,.32,0,.26,.11,.55,.04,0,0,.49,.12,.93,.01,.02,.02,.1,0,.36,.01,0,.07,0,.11,.46,0,.84,0,0,.53,.69,.87,.77,0,.07,.25,.09,0,.51,.2,.08,.01,0,.41,.01,.59,.78,.88,.02,.13,.94,0,0,.28,0,.4,.29,1,.73,0,0,0,.1,.1,.25,.18,.06,.57,.97,.5,.02,.72,0,.05,.4,.01,.64,.88,.02,.07,.65,.5,.67,.45,.02,0,0,.02,.06,.34,0,0,.76,0,0,.44,.11,.06,.02,0,.64,.5,0,0,0,0,.18,.12,.17,.11,0,.47,.12,0,.69,0,.01,.99,.23,.12,0,.08,0,.9,.99,.45,.94,.27,.01,.42,.2,.65,.67,.21,0,.37,0,.59,.03,.11,.18,.36,.25,.52,0,.39,.01,0,.16,0,.38,1,.4,.94,.03,.3,0,.44,0,0,0,.01,.21,.24,.05,.03,.33,.94,.51,.26,0,0,.21,0,.18,.58,.02,.25,.01,.03,.47,0,0,.01,.03,.39,0,.59,.01,.09,.46,.55,.34,.09,.96,.6,.69,.02,.62,.26,0,0,.47,.18,0,0,0,.09,.47,.05,0,.25,.03,.83,.02,.02,.88,.7,0,.55,.04,0,.28,.26,0,.64,.61,.44,.93,.25,.21,.86,.99,.99,.01,.53,.49,.29,.38,.03,.37,0,.01,0,.52,.23,.05,0,.66,.92,.24,.02,.04,.03,0,0,.95,.44,.87,.01,.4,.33,0,.1,.69,0,.08,.25,.76,.21,0,.09,.56,.44,0,.6,.82,.47,.8,.3,0,.92,.42,.44,.57,.96,.04,0,.09,0,.84,0,.13,.37,0,.94,.07,0,.62,.02,.12,0,0,0,.33,0,.01,.05,0,.33,.06,.39,.41,.14,.86,.48,.85,.58,.73,.16,0,.16,.03,0,.08,0,0,.31,.46,0,.48,.01,.04,.04,.25,0,.09,.31,0,.76,.01,.04,.48,.13,.77,.08,.02,0,.06,.17,0,.37,.07,.64,.73,.65,0,0,.65,0,.16,0,.3,.34,.09,.22,0,.03,0,.25,.69,.14,.65,.51,.1,.04,0,.02,0,.48,0,.03,.45,.11,0,.15,0,.41,.45,.28,.1,0,.07,.06,.97,.19,0,.93,.01,.18,.34,0,0,.57,.13,0,.34,.24,.32,0,.27,.54,.02,.97,.63,0,0,.28,0,0,.05,0,.01,.16,.53,.65,.73,.63,0,.64,.15,.46,.03,0,.14,0,.01,.18,0,.02,.49,.31,.38,.02,0,.68,1,.27,.01,0,.14,.9,.08,.18,0,.45,0,0,0,.29,.02,.02,.16,.06,.1,.94,1,.48,.13,0,.3,0,.34,.13,.95,.29,.38,.15,.3,.89,.66,0,0,.73,.67,.01,.96,.01,.48,.28,.04,.44,0,.14,0,.19,.65,.01,.69,.01,.7,.48,.02,.39,.07,.87,.12,.37,.38,.01,0,0,0,.93,.46,.01,.21,.22,.84,.14,.37,.32,.1,0,0,0,.87,.28,.46,.09,.04,.02,.33,.44,0,.09,0,0,.05,.01,0,0,.16,0,.28,.16,.24,0,.13,.07,0,.26,.71,0,0,0,.23,.06,0,.66,.02,0,.37,0,.87,0,.76,.51,.04,.68,.88,.52,.01,.78,.49,.01,.03,.54,.22,.14,0,.2,.63,.01,0,.1,.01,0,.01,.27,.37,.45,0,.1,.01,.65,0,.64,.93,.09,.1,.5,0,.09,.25,0,.01,.52,.02,.63,.01,0,.91,.23,.01,0,.98,.03,.55,0,.27,0,0,0,.69,0,.09,0,.86,.01,.8,0,0,.12,0,.02,.13,.44,.03,.03,0,.26,0,.22,0,.53,.43,.18,.12,.9,.58,.1,.27,0,.69,0,.11,.45,0,.66,.06,.43,0,.02,.57,.21,.46,.07,.04,.02,0,.12,.7,.4,0,.79,0,.77,.75,.39,.26,.81,.16,.01,.05,.15,0,.33,.14,.84,0,.84,.32,.03,.38,.4,.07,.09,.85,0,.67,.01,.73,1,.23,.18,.34,.01,.91,0,.73,.1,.22,0,.46,0,.91,.78,.01,0,.62,.06,.84,0,.42,.83,.73,.59,.67,.08,.64,.01,0,.01,.81,0,.01,.01,.04,.08,.32,.24,.64,.08,.64,.03,.5,.18,0,0,0,.32,.1,0,.11,.04,.44,.75,.5,0,.64,.04,.05,.98,.06,0,.17,0,.01,.01,.02,0,.77,.03,.1,0,.29,.8,.06,.57,0,.37,.01,.18,0,.39,0,.64,.17,.55,.84,.04,.18,0,.18,.22,0,0,.36,.01,0,.75,.58,.12,0,.03,.36,.27,0,.18,.96,.09,.38,.21,.23,.99,0,0,0,.05,.07,.64,.36,.05,.04,.03,.81,.11,0,.87,.02,0,0,.01,0,.51,0,0,.12,.48,0,.56,.01,.46,.64,0,.13,.03,.94,.2,.65,.66,.03,.01,.08,.87,.02,.41,.05,0,.29,.33,.02,.32,.98,.92,.09,.18,.46,.16,.65,0,.07,.05,.49,.58,.44,.96,.43,.01,.7,0,0,0,.98,.68,0,0,0,.05,0,.02,.02,.01,.04,0,.35,.72,.91,0,.06,.04,.24,.2,.66,.95,.61,0,.9,.34,.19,.26,.9,.01,.17,.8,0,.14,0,.23,.18,0,.06,.31,.04,.01,0,0,.76,0,0,.28,.6,.04,.53,.13,0,.46,.48,.23,.86,0,0,.56,0,.03,0,.72,0,.7,.86,.97,.78,.22,.01,.25,.14,.59,.46,.27,0,.03,.01,.85,.13,0,.67,.23,.13,.21,.16,.29,.23,.02,.87,0,.02,.02,0,.72,.58,.04,.6,0,.44,.26,.35,.05,.88,.11,.02,.56,.02,.93,.55,.5,.47,.09,.86,.67,.04,0,.29,0,.01,.03,.86,.27,.28,0,.03,.85,0,.18,.01,.12,.17,.7,.08,.25,.04,.72,.78,.05,.18,.22,.89,.3,.04,0,.81,.01,0,.02,.07,.02,.43,.73,0,.44,0,0,0,.63,.09,.11,.73,.58,.01,0,.85,0,.32,0,.36,.01,0,.07,.01,.01,.16,.18,.62,.17,.14,.31,0,.03,.92,.11,.31,.87,.08,.05,.11,.59,.11,.72,0,0,.92,0,.46,0,.01,.21,.01,0,.96,.54,.13,.2,.03,.37,0,.28,.43,0,0,.97,.87,0,.07,0,0,.57,.06,.02,.02,.7,0,.21,.75,.43,.37,.62,.59,.85,.76,.94,0,.97,.4,.23,.54,.95,.01,.85,.56,.21,.64,.05,0,.18,.01,.3,.02,.01,.29,.01,.44,.32,.03,.12,.84,1,0,.9,.14,.84,0,.58,.3,0,.37,.19,.33,.48,0,0,.16,.06,.98,0,.76,.12,.25,0,0,0,.02,.07,.78,0,0,.01,.31,.19,.45,.53,.62,.22,0,.8,.33,.58,.58,0,.85,.34,.05,.23,.19,0,0,.23,.58,0,.74,.28,.01,.36,.41,.02,.02,0,.79,.38,.42,.11,.34,.46,.17,.74,0,0,.07,0,.12,0,0,.7,.12,.01,.09,0,.42,.18,.4,.13,.91,0,.13,.85,.13,.78,0,.01,.2,.01,.57,.74,0,.11,0,.91,0,0,0,.13,0,.1,.29,0,.04,0,.26,0,.42,.04,.01,.08,0,.04,.32,.1,.43,.01,.39,.9,.7,.49,.07,.08,.04,.22,.48,.53,0,.22,.43,.72,.82,.65,.42,.97,.07,.04,.05,.93,.17];export{a as pvalData};
