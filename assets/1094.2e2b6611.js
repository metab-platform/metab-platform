const a=[.71,.27,.04,.83,.02,.12,.24,.04,.3,.01,.66,.02,.6,.05,.75,.27,.23,.1,.13,.81,.22,0,.65,.87,.83,.02,0,.11,1,0,.07,0,.12,.02,0,.73,.11,.67,.01,.01,.94,0,.13,.71,.15,1,.78,0,0,0,.2,.5,.18,0,0,.17,.16,0,.33,.07,0,.05,0,.89,0,0,.01,.59,.28,.49,.26,.2,0,.26,0,.91,.51,0,.29,0,.42,.07,.45,.01,0,0,.06,.26,0,.14,0,.98,.01,.84,.03,.09,.35,.43,0,0,.77,0,.05,.57,0,.92,.4,.88,.34,.01,.04,0,.07,.96,0,.37,.19,0,0,.24,.09,.01,.21,.41,.88,0,.06,0,0,.08,.29,.03,.43,0,.8,.05,0,.01,0,.69,0,.16,0,.04,.51,.96,.59,.02,.02,.21,0,0,.79,.46,.02,.43,.27,.43,.71,.86,.1,.03,.29,.03,.03,0,.1,0,.21,.01,.98,0,.04,.2,.22,0,.19,0,0,.11,.65,.52,.44,.17,0,.98,.79,.16,.01,.04,.61,0,.31,0,0,.69,.01,.86,.68,0,.01,0,.04,.73,.01,.09,.44,0,0,.86,.01,.96,.05,.25,.01,0,.31,.01,0,0,.2,.03,.21,.04,.28,.03,.01,0,.6,.16,.23,.53,.52,.08,.62,.58,.87,.75,.84,.36,0,.97,.04,0,.01,.08,.72,0,.53,.58,.02,0,0,.01,.02,.28,.22,.01,.07,.17,.17,.14,.01,0,.27,0,.05,.02,.98,0,0,.68,.08,.01,.17,.94,0,0,.01,0,0,0,.02,.66,.32,.16,0,.15,.26,0,.85,0,.2,.2,.51,.14,.13,.03,0,.02,.96,.44,0,.06,.24,.84,0,0,.85,.56,0,.46,.09,.52,0,.02,0,.04,.01,0,0,0,.74,.01,0,.15,.24,.06,0,.1,.03,.12,.23,.23,0,.29,0,.28,.27,0,0,.47,.43,.73,.05,.03,.38,0,.19,0,0,0,.65,.31,.28,.04,.11,.62,0,.13,.05,.01,.4,.16,.05,.34,.44,.02,0,.01,0,.22,.03,.08,0,.37,.48,.05,.46,0,.92,.7,.88,.03,.63,.56,.73,.44,.56,.41,.01,.63,.19,.4,.56,.29,0,.56,.3,.76,0,.66,.01,.11,0,.66,.88,.02,0,.47,.01,.05,.04,0,.26,.18,0,.13,0,.01,.73,.24,0,.72,.94,.15,.29,.98,.01,.57,.11,.02,.25,.61,0,0,.99,.29,.04,.01,.01,0,0,.52,0,.23,.27,.1,.09,0,.01,0,.01,.13,.88,.12,0,.02,.48,.1,0,.1,.28,0,.27,0,.72,.04,.01,.02,.87,.06,.16,.35,0,.77,0,0,.71,0,0,.14,.64,.06,0,.71,.49,.76,.03,.05,.92,.01,.1,.76,.01,.14,.02,.12,.7,.08,.01,.75,.02,.09,0,.48,.17,.8,.77,0,0,.94,0,.78,0,0,.01,0,0,.1,.11,.2,.01,.44,.01,.84,.92,.07,.07,.02,0,.02,.3,0,.54,.02,.42,.02,.05,.02,.15,.02,.12,0,0,.19,.17,0,0,.44,.01,.05,.01,.03,0,.23,0,.01,.93,.59,0,0,.85,.25,.03,.11,.55,.63,.01,.45,.05,.03,.01,.52,.25,.04,.67,0,0,.71,0,.76,0,.69,0,.92,.2,0,0,.14,.14,.68,.92,0,.23,.26,.23,.03,.03,.11,.5,0,.21,.01,.94,0,.01,0,.37,.72,.24,.31,.7,.01,.64,.28,.34,.12,.88,.47,.78,.27,.41,.83,.98,.01,0,.29,.01,.11,.73,.33,.12,0,.09,0,.96,0,.05,0,0,.01,0,.47,.47,.02,.27,0,0,0,.39,.02,.02,.14,.72,.82,.9,.97,.2,.96,.41,.26,.1,.01,.81,.79,.73,.9,.01,0,0,.05,.35,0,.17,.05,0,0,.06,.38,.02,.03,.1,.04,.35,.02,.45,0,.14,.52,.18,.02,.1,.46,.1,.14,.03,.41,0,.02,0,.03,0,.03,.43,.95,.73,.16,.95,0,.03,.03,.02,.95,.49,.37,.89,.07,.87,.39,.04,.17,.15,.69,.15,.34,.07,0,.47,.11,.02,.07,.4,.16,0,0,.16,.64,.81,.1,.12,1,0,0,.64,.52,.02,.31,.55,0,.88,0,0,.05,.02,.7,0,0,.86,.45,.66,0,.9,.99,0,.12,0,.24,.01,.65,.92,.17,.03,.4,0,.3,.03,.01,.14,0,.17,0,.28,0,.12,.06,0,0,0,0,0,.37,.11,.84,.07,0,.06,0,.54,0,.52,.03,.17,0,.23,.5,.03,0,.01,.44,.65,.68,.36,0,.04,0,.71,0,.36,.22,.65,.47,.33,.36,.22,.02,.26,.32,.39,.75,.27,.05,.01,0,.9,0,.16,.46,.09,0,.06,.14,.92,0,0,0,.9,0,0,.38,.11,0,.01,.36,.22,.91,.01,.03,.02,0,0,.01,0,.31,.05,.06,0,.52,0,.05,.14,.36,.25,0,.37,0,.76,.86,.5,.28,0,.02,.38,0,.14,0,.01,.07,.07,.06,0,.31,.08,0,.08,.26,.25,.83,.02,.01,.07,.18,.56,.26,.7,.63,.27,0,.7,0,.12,0,0,.36,0,.07,.9,.01,.03,.52,.63,.14,.65,.27,.06,.03,.16,.02,.71,.01,.01,.02,.91,.01,0,.21,0,.06,.01,.04,.44,0,.6,0,.88,.17,.01,.68,.75,.09,.04,.25,.21,0,.01,.17,.01,.22,.01,0,.48,.06,.03,.2,.06,.28,.23,.06,0,.36,.09,.01,.37,.02,.11,.05,.35,.76,0,.52,0,.04,0,0,.51,.1,.04,.95,.84,.03,0,.09,0,.04,.05,.01,.59,.36,.32,.46,.6,.67,.79,.61,.74,.13,.99,.23,.72,.39,.16,0,.84,0,.19,.43,.01,.86,.06,.81,0,.95,.01,.01,.03,.55,0,.63,.59,.77,0,.27,.09,.45,.87,0,.35,.34,.67,.08,.81,.12,0,.26,.47,0,.25,.93,.04,.07,0,0,.75,.7,.43,.03,.13,.44,.25,.43,0,.53,.17,.86,0,.26,0,0,.08,.46,0,0,.04,.2,0,.05,.02,.37,.01,0,.27,0,.14,.27,0,0,0,.43,0,.02,.71,.75,0,0,.04,0,.37,.47,.11,.62,.42,0,0,.05,.63,.27,.07,.2,.23,0,.09,0,0,.23,0,0,.29,.79,.01,.18,0,.65,.15,.1,.02,.28,.05,.61,.01,.49,.01,.07,.01,.99,.9,.05,.21,.96,.39,.01,.16,0,.57,.7,0,.37,.5,.58,.1,.11,.38,0,0,.29,.28,.01,.52,0,.24,.68,.52,.23,.28,0,.7,.57,.02,0,0,0,0,.36,.01,.32,0,.12,.19,.35,0,.53,.02,.01,.02,0,.92,.29,.02,.23,.43,.05,.77,.3,0,0,.11,.99,.12,0,.01,.07,0,.11,.31,0,.81,0,.04,.1,.04,.01,.13,.33,.88,.02,.88,.32,.74,0,0,.05,.14,0,.51,.37,.26,.01,.3,0,.76,.01,0,.2,0,.21,.03,.03,.21,.66,.52,.47,.28,.02,.06,.7,.4,.41,.98,.79,.01,.51,.02,.52,.99,0,.18,.29,.04,.01,.07,.03,.02,.64,.09,.66,0,.09,0,0,0,.8,.02,.58,.02,.26,.15,.09,.91,.06,.12,.61,0,.18,.28,.01,.52,.83,.29,.68,.47,.43,.4,.01,0,0,.56,.13,0,.04,.12,0,.47,.06,.01,.13,.63,.76,0,1,.02,.01,0,.25,.04,.31,.04,.19,0,.45,.2,.19,0,.04,.32,.01,.1,.47,.16,0,.01,0,.85,.01,.78,.08,.51,.46,.73,.79,.83,0,.04,.91,.43,.22,.14,.52,.45,0,.68,.4,0,.11,.15,.03,.7,.06,0,0,.76,.01,.6,.02,.42,0,.22,.84,0,.01,.34,.03,0,.02,.59,.28,.02,0,0,.14,.22,.01,.36,.02,.04,.7,.4,.39,.92,.51,0,.01,.1,.92,.02,0,.07,0,0,.08,.09,.27,0,.71,.3,0,.65,.85,.97,0,.03,.82,.01,0,.92,.04,.39,.19,.18,.01,.14,.49,.01,.98,.25,0,.29,.29,.09,.51,.09,.62,.99,.32,0,0,0,.03,.45,.22,0,.22,0,.92,.25,0,.45,.37,.52,0,.43,.22,.84,.29,.5,.18,0,.03,.77,0,0,.83,.6,.17,.25,0,0,.01,.03,.22,.84,.43,0,.19,.09,0,0,.55,0,.89,0,.18,.34,.47,.35,.06,.26,.91,.01,.02,.35,0,.63,.11,.43,0,.73,0,.37,.65,.32,.57,.42,.09,0,0,.36,.03,.01,.39,.14,.69,.02,.17,.48,0,1,.82,0,.3,0,.74,0,0,.05,0,.5,.56,.01,.91,.43,0,.58,.29,.02,.52,0,.18,0,.97,0,.35,.09,0,0,0,.01,.87,.97,0,0,.99,.01,.09,0,0,.68,0,.06,.03,.08,0,.06,.27,0,0,.14,0,.3,0,.39,.05,.02,0,.66,.06,.35,.02,0,0,0,.89,.03,.77,.02,.17,0,0,0,.01,.02,.16,0,0,0,0,.02,0,.6,0,0,.56,.02,.21,.58,.15,.03,0,.28,0,.45,.02,0,.03,.33,.01,0,.4,0,0,.04,.01,.12,0,.22,0,.18,.01,.83,.85,.07,.19,.19,.12,.5,0,0,.9,0,0,.07,.01,.03,0,.5,.04,.26,0,.26,.2,.91,.01,0,0,.35,0,.42,.06,0,0,0,.03,.1,.14,.33,.01,.06,0,.13,.01,0,0,.45,0,.86,.2,.01,.79,0,.88,.01,.01,.78,0,.61,0,.17,0,.03,.15,0,.44,.46,0,.16,.25,.66,.03,.29,.75,.14,.01,.31,.51,.03,.09,.37,.83,.13,.82,.06,.55,.09,.8,0,0,0,.21,.04,.84,.2,.03,0,0,.04,0,.08,.01,.02,.45,0,.83,.71,.65,.26,.17,0,.51,.81,0,0,.06,.62,.27,.61,.89,0,.11,.18,.08,.69,.16,.58,0,.18,0,0,.26,.33,.52,.03,.57,.01,.01,.28,.01,.88,.07,.8,.16,.02,0,.33,.08,.14,.7,.01,.13,0,0,.49,.13,.11,.01,.09,.19,.98,.54,.12,0,0,.01,.02,.5,.28,0,0,0,.01,0,.01,0,.01,0,.82,.61,0,.01,0,.45,.11,.59,0,.04,.12,.07,.07,.2,.04,0,.26,.15,.17,.35,.2,.91,.25,.01,.21,.01,.98,.05,.21,.17,.77,.56,.25,.35,.48,.75,.06,.99,.17,.19,.28,.11,0,0,.32,.6,.07,.02,.01,.87,.02,.9,0,.2,0,.02,.87,.02,.45,.02,.15,0,.01,0,.61,.26,0,.2,.03,.56,.04,.41,0,0,.69,.87,.32,0,.08,.91,.27,.91,0,.03,.03,.91,.32,0,0,0,0,.13,.05,.21,.02,.33,.29,.72,0,.17,0,.55,.01,0,0,0,.14,0,.56,.07,0,0,.07,.31,.67,.05,.74,.77,.01,.03,.3,0,.68,.98,.39,0,.01,.68,.02,.36,.91,.87,.88,.49,.8,.13,0,.89,.08,.03,.18,0,.03,.05,.07,.03,.1,.2,0,0,0,.16,0,.07,.6,.01,0,.01,.4,.08,0,.29,.7,.35,0,.38,.12,0,.21,.57,.1,.01,.14,0,.04,0,.82,0,.78,0,.16,0,0,0,.33,0,.43,.01,.58,.2,.2,.01,0,.02,.03,.78,.03,.03,0,.03,.03,.88,0,.96,.03,0,.04,.02,.22,.04,.64,.06,0,.05,0,.04,.15,0,.64,.07,.01,.02,.08,0,.62,0,.99,.69,.19,.18,.65,.35,.14,.73,.01,.33,0,0,.01,.96,0,0,.04,0,.36,.04,0,.1,0,.74,0,0,.18,.09,.01,.5,.21,.63,.78,0];export{a as pvalData};
