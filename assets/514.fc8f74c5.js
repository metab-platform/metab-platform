const a=[.99,.94,.36,.27,.6,.15,.08,.1,.46,.59,.75,.89,.79,.55,.19,.64,.28,.89,.09,.26,.42,.01,0,.17,.96,.29,0,.8,0,0,0,.13,.53,.97,.88,.58,.5,.09,.06,.32,.77,.68,.86,.88,.55,.04,.71,.43,.73,.04,.94,.02,.02,.86,.02,.35,.92,.53,.53,.01,.02,.17,.26,.61,.01,0,.31,.09,.64,.98,.38,.7,0,.36,.87,.31,.35,.02,.1,.37,.99,0,.54,.09,.97,.45,.13,1,.69,.47,.32,.93,.05,.5,.16,0,.49,.01,0,.02,.13,.39,.06,.71,.02,.12,.69,.98,.16,.1,.25,.02,.95,.78,.74,.69,.31,0,.08,.4,.81,.73,.19,.34,.58,.14,.26,.56,0,.78,.01,.76,.36,.03,.12,.71,.03,.22,0,.58,.14,.34,.06,.43,.3,.21,.58,.01,.08,.02,.32,.54,.85,.2,.07,.37,.64,.18,.03,.15,.52,.29,.51,0,.1,.01,.02,0,.02,.07,.28,.1,0,.47,.03,.27,.56,0,0,.17,.01,.55,.57,.04,0,0,.02,.12,.05,.78,.03,.03,.13,.21,.02,.76,.01,.02,.02,.81,.33,.07,.91,.2,.47,.03,.76,.01,0,.08,.01,.59,.79,.75,.4,0,.04,.02,.12,.49,.01,.02,.1,.68,0,.99,.01,.02,.54,.25,.65,.48,.98,.22,.34,.18,.57,.04,.42,.84,0,.18,0,0,.01,.16,.28,.81,.99,.28,.9,.55,.01,0,.23,.94,.47,.77,.84,.01,.26,.24,.45,.24,0,.02,.63,.36,.39,.91,.21,.01,.82,.18,.88,.51,.01,.02,.41,.64,.04,.17,.03,.47,0,.02,.29,.63,.64,.83,.45,0,.09,.13,.27,.95,.67,.18,.93,0,.05,.41,.13,.95,.86,0,.09,.01,0,.62,.09,.9,.01,.5,.84,0,.95,.14,.2,.92,.04,.43,.02,.09,.62,0,.25,.3,.1,.01,.27,.01,0,.97,0,.97,.01,0,.78,.73,0,.87,.54,.73,.47,.95,.01,0,.92,0,.01,.09,.46,0,.15,.05,.02,.4,.89,.01,.81,.36,0,.79,.55,.84,.06,.79,.1,.58,.29,.48,.58,0,.06,.06,.98,.66,.24,.22,.04,.59,.36,.15,1,0,.11,.19,.04,.07,.76,.07,.9,.62,.55,.5,.05,.59,.72,.68,.98,.01,.45,.25,.05,.91,.06,.41,.07,0,.18,.87,.03,.8,.64,.72,.14,.61,.03,.02,.73,.98,.18,.09,.99,.98,.9,.81,0,.28,0,0,.56,.84,.24,.19,.05,.15,.76,.43,.34,.22,.05,.11,.44,.04,.63,.03,.31,0,.61,.03,.29,0,.53,.01,.9,.86,.52,0,.4,.04,.27,.03,.25,.99,.84,.83,.37,.89,.83,.66,.52,0,.01,.16,.43,.8,.73,.12,.19,.27,.74,.1,.82,0,.33,.01,.01,.03,.07,.87,.69,.53,.56,.35,.62,.86,.09,0,.01,.92,.68,.59,.19,.7,.08,.12,.69,.02,.41,.4,.3,0,.89,.05,.48,.08,.02,.73,.4,.56,.1,0,0,.07,.24,.02,.99,.03,.03,.75,.27,.03,.48,.97,.03,.07,.01,.42,.21,.22,.26,.09,.71,.75,.06,.18,.18,.25,.23,.8,.92,.13,.08,.32,.97,.01,.38,.88,.44,.32,.02,.01,.85,.34,.84,.8,.73,.14,.75,.19,.05,.56,.83,.42,.66,.45,.03,.26,.44,.05,.1,0,.04,.58,.81,.01,.77,.33,.66,.18,.13,.9,0,.13,.11,.29,.86,.03,.1,.69,.25,.4,.41,0,.05,.18,.55,.46,.88,.25,.16,.07,.01,.08,.74,.13,.43,.27,.01,.04,0,.96,0,.13,.68,.08,.31,.08,.87,.32,.34,.01,.18,.71,.19,.01,.22,.68,.49,.01,.1,.36,.08,.37,0,.07,.01,.04,0,.11,.01,.79,.23,.79,0,.3,.11,.29,.42,.71,.63,.56,.89,.98,.74,0,.03,.46,.8,.44,.94,0,.07,.11,0,.83,.31,.26,.33,.01,.11,.85,.26,.87,.71,.18,.14,.47,.2,0,.01,.01,.25,.44,.04,.25,.28,.81,.1,.18,.47,.63,.24,.37,.7,.1,.37,0,.13,0,.88,.21,.2,.08,.37,.04,.49,.86,.37,.48,.32,.41,0,.13,.67,1,.05,.61,.45,.01,.09,.12,.02,.02,.42,.31,.55,0,.48,.04,.97,.12,1,.27,.35,.51,.39,.02,.2,.07,.38,.08,.37,.96,.21,.02,.03,.06,.19,.01,.37,.13,.23,.05,.59,.02,.09,.61,0,0,.43,.06,.01,.1,.12,.14,.77,.22,.68,.85,.95,.09,.1,.37,0,.03,.67,.61,.23,0,.83,.02,.18,.03,.87,.04,.02,.01,.24,.35,.04,.49,.35,0,.5,.48,.83,.32,.64,.06,.07,.6,.04,0,.8,.88,.37,.6,.05,.79,0,.35,.55,.89,.07,.67,.41,0,.05,.84,.1,.32,.92,.71,0,.02,.39,.06,.07,0,0,0,.11,.83,.89,.01,0,.44,.82,.03,.29,.33,.16,0,.67,.2,.12,.67,.26,.89,.07,.5,0,.31,.23,.94,0,.05,.03,.22,.89,.01,0,.49,.12,.01,.61,.4,0,.62,.16,.11,.23,.8,0,.04,.25,.06,.08,.26,.24,.15,.36,.66,.47,.08,.56,.77,.05,.24,.38,.32,.1,.26,.12,.01,.89,.03,.35,.1,.3,.6,.67,0,.34,.29,0,.38,0,.71,.76,.99,.39,.43,.46,.68,.81,.38,.04,.19,.74,.67,.04,.85,0,.81,.65,.6,.01,0,.03,.1,0,.75,.1,.51,.71,.35,.01,.8,0,.1,.1,.9,.15,.25,.7,.03,.17,.93,.22,.81,.16,.66,.18,.22,.61,.56,.44,.06,.01,.95,.22,.82,.65,.45,0,.06,.83,.04,.04,.01,.13,0,.21,.36,.09,.31,.01,.01,.05,.05,.82,0,.27,.17,.33,.33,.83,.06,.73,.94,.99,.02,.03,.92,.76,.78,.84,.28,0,.47,0,.97,.26,.32,.02,.9,.63,.57,.21,.01,.1,0,.06,.34,.58,.83,.01,.91,.41,0,.87,0,.92,.03,.76,.7,0,.78,.6,.97,.92,.01,.76,.78,.6,.43,.14,.53,.47,.38,.37,.83,.92,.73,0,.12,.65,.08,.51,.21,.47,.01,.01,.72,.82,.84,.19,.81,.41,.92,.32,.02,.24,.02,.88,.81,.41,.91,.75,.88,.04,.64,.43,.98,.02,.03,.18,.01,.63,.78,.02,.11,0,0,.45,.06,.84,.39,.12,.97,.77,.32,.87,.22,.06,.23,.51,0,0,.05,.07,.64,.15,.24,.09,.08,.04,.15,.16,.03,.5,.53,.9,.06,.23,.23,0,.1,.9,.64,.57,.42,.09,0,.74,.03,.16,.65,.01,0,.24,.31,.14,.02,.48,.86,.5,.77,.58,.85,.41,0,.28,0,.4,.1,.65,.04,.03,.01,.03,.02,.98,.69,.57,.02,.92,.04,.28,.01,.06,.48,.28,.15,.19,.97,0,.83,.33,.93,.86,.63,.82,.44,.93,.14,.13,.16,.04,.02,.32,.45,.54,.57,.17,.07,.51,.96,.07,.32,0,.19,0,.12,0,.01,.85,.06,.69,.21,.35,0,.13,.06,.13,0,0,.16,.19,.35,.28,.48,.34,.16,.02,.85,0,.8,.08,.22,.34,.6,.82,.7,.32,.24,.57,.51,.78,.72,.38,.27,0,.55,.03,1,.05,.37,.09,.35,.22,.05,.1,.58,.02,.26,.2,.73,.32,.01,.2,.15,0,.01,.42,.05,.78,.35,.1,.61,.17,.05,.01,.16,.01,.87,.01,.19,.9,.55,.32,.05,.56,.47,.25,.21,.18,.42,.09,.13,.86,0,.08,.96,.09,.34,.15,.58,.19,.5,.66,.01,.06,0,.97,.02,.64,.95,.09,.61,.02,1,.52,.31,.83,.44,.25,0,.89,.58,.48,0,.02,.08,.1,.35,.69,.32,.55,0,.44,.39,.01,.19,.09,.02,.17,.16,.04,.36,.83,.05,.1,.02,.03,.05,0,.22,.57,.62,.01,.12,0,.01,.34,.05,.39,.49,.1,.51,.58,.26,.29,.01,0,.77,.01,.79,.06,.04,.01,.65,.5,.49,.29,1,.96,.39,.14,.13,.17,.54,.59,.4,.1,.77,.34,.25,.15,0,.64,.51,0,.03,.97,.66,.01,.03,.03,.43,.81,.02,.53,0,.35,.41,.04,.41,.78,0,.08,.26,.01,.37,.26,.46,.55,.09,.82,.01,.75,.59,.83,.26,.38,.41,.68,.43,.34,.38,.51,.24,.33,.35,.31,.46,.83,.27,.01,.9,.84,.14,.03,.38,.63,.35,.77,.21,.95,.45,.96,.57,.12,.48,.6,.25,.02,.14,.66,.04,.4,.98,0,.71,.36,.86,0,.02,.83,0,.73,.18,.15,.21,.03,.02,.01,.72,0,.01,.6,.93,0,.91,.68,.06,.33,.95,.17,.3,.84,.43,.3,.27,.38,.47,.61,0,.86,0,.6,0,.63,.01,.59,.87,.92,.6,.24,0,.45,.29,.68,.58,.03,.82,.48,.3,0,.83,.14,0,.09,.88,.91,.01,.01,.51,.02,0,.45,.66,.73,.03,.01,.72,.03,0,.45,.05,.11,0,.02,.73,.01,.1,0,0,0,.57,.17,.32,0,.15,.05,.04,.57,.34,.83,.4,.2,.01,.05,.82,.06,.04,.17,.28,.37,.03,.27,.28,.14,.06,.06,.09,.02,.31,.95,.53,.15,.12,0,.03,.95,.29,.38,.9,.21,.01,.88,0,.1,.03,.62,.86,.03,0,.8,0,.94,.74,.46,.76,.64,.12,0,.75,.05,.59,.02,0,.07,0,.13,.02,.02,.05,.97,.13,.1,.78,.53,.79,.9,.03,.21,.31,.41,.06,.01,.73,.69,.47,.06,.01,.08,.17,0,.12,.88,.01,.98,.64,.08,.05,.44,.09,.13,.22,.01,.75,.8,.03,.01,.32,.02,.98,.54,.07,.14,.72,.01,0,.06,.01,.58,.01,.59,.03,.01,.58,.73,.59,.23,.08,.5,.06,.36,.42,.17,.65,.56,.91,0,0,.62,.36,.28,.63,.5,.2,.52,.15,.45,.01,.05,.56,.14,.27,.86,.45,.26,.01,.03,.8,.93,.02,.57,.88,.1,.96,.1,0,.4,.68,.54,.2,.37,.03,.62,.81,.44,.65,.85,.71,.23,.11,.02,.15,.2,.73,.05,0,0,.07,.21,.03,.93,.02,.9,.23,.2,.66,.32,.22,.02,.91,.96,.06,0,.14,.78,.02,.64,.27,.13,.07,.64,0,.69,.62,.51,.47,.31,.41,.03,.6,.4,.95,.14,.15,0,.06,.88,.18,.79,.53,.01,.2,.55,.05,.07,.01,.05,.24,.15,.42,.65,0,0,.1,.73,.34,.13,.83,.2,.16,.85,.48,.49,.03,.06,.05,.44,.72,.03,.29,.34,.93,.96,.92,.84,.09,.15,.87,.04,.86,.55,.33,.63,.08,.06,.12,.48,.08,.33,.11,.6,.05,.18,.26,.38,.52,.07,.21,.99,.15,.15,.21,.91,.34,.34,.29,.51,.2,.93,.4,.01,.93,.25,.48,.26,.79,.14,.01,.1,.13,.04,.16,.54,.04,.92,.76,.69,.09,.31,.34,.91,.03,.06,.01,.45,.85,.31,.02,.02,.79,.79,.3,.16,.13,.14,.91,.27,.52,.02,.01,.78,.08,.81,.85,.22,.74,.04,.93,.3,.78,.87,.73,.73,.63,0,0,0,0,.06,.43,.87,.02,.43,.07,.76,.96,.48,.55,.62,0,.63,.65,.47,.2,.58,.4,.01,.49,.27,.98,.57,.14,.15,.02,.07,.21,.31,.14,.49,.97,.13,.15,.08,.15,.42,.05,.14,.05,.85,.07,.36,0,.97,.02,.9,.01,.67,.21,.05,.22,.38,.2,.2,.9,0,.65,.84,.1,.9,.95,.05,0,.18,.83,.73,.08,.21,0,.09,.04,.92,.45,.37,.84,.59,.61,.55,.21,0,.51,.69,.74,.93,.61,.24,.13,.08,.07,.24,.34,.99,.52,.05,.22,.29,.25,.02,.03,.2,.22,.41,.86,.53,.03,.41,.89,.67,.03,.83,.89,.46,.68,.88,.72,.05,.48,.22,0,1,.48,.2,.86,.94,.26,.44,.13,.95,.5,.22,.54,.14,.04,.29,.02,.01,.66,.43,0,0,.45,.23,.79,.28,.43,.08,.56,.48,.31,.12,.03];export{a as pvalData};
